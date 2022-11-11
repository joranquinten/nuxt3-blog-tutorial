interface Image {
    title: string;
    description?: string;
    file: {
        url: string;
        details: {
            image: { width: number, height: number },
        },
    },
}
interface Page {
    title: string;
    body: object;
    heroImage?: Image;
};
interface PageNav {
    title: string;
    slug: string;
};
interface Article {
    title: string;
    body: object;
    heroImage?: Image;
};

export const usePage = async (slug: string): Promise<Page> => {
    const { data } = await useAsyncData('page', async (nuxtApp) => {
        const { $contentfulClient } = nuxtApp
        return $contentfulClient.getEntries({
            content_type: 'page',
            'fields.slug[in]': slug,
            limit: 1,
        })
    })
    const { title, body, heroImage } = data.value.items[0].fields;

    return {
        title,
        body,
        heroImage
    }
}

export const usePagesNav = async (): Promise<PageNav[]> => {
    const { data } = await useAsyncData('pageNav', async (nuxtApp) => {
        const { $contentfulClient } = nuxtApp
        return $contentfulClient.getEntries({
            content_type: 'page',
            'fields.slug[ne]': 'home' // filter out home slug
        })
    })

    const pagesNav = data.value.items
        .map((pageFields: any) => {
            const { title, slug } = pageFields.fields
            return { title, slug }
        })

    return pagesNav
}

export const useArticles = async (slug: string = ''): Promise<Article | Article[]> => {
    const fetchAll = (slug === '');
    const key = fetchAll ? `articles` : `article`
    const query = fetchAll ? {} : {
        'fields.slug[in]': slug,
        limit: 1,
    }
    const { data } = await useAsyncData(key, async (nuxtApp) => {
        const { $contentfulClient } = nuxtApp
        return $contentfulClient.getEntries({
            content_type: 'post',
            ...query,
        })
    })

    if (fetchAll) {
        return data.value.items.map((item: any) => { 
            const { title, slug } = item.fields;
            return { title, slug }
        })
    }
    
    const { title, body, heroImage } = data.value.items[0].fields;

    return {
        title,
        body,
        heroImage
    }
}
