import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Portfolio\HomeController::index
 * @see app/Http/Controllers/Portfolio/HomeController.php:19
 * @route '/'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Portfolio\HomeController::index
 * @see app/Http/Controllers/Portfolio/HomeController.php:19
 * @route '/'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Portfolio\HomeController::index
 * @see app/Http/Controllers/Portfolio/HomeController.php:19
 * @route '/'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Portfolio\HomeController::index
 * @see app/Http/Controllers/Portfolio/HomeController.php:19
 * @route '/'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Portfolio\HomeController::index
 * @see app/Http/Controllers/Portfolio/HomeController.php:19
 * @route '/'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Portfolio\HomeController::index
 * @see app/Http/Controllers/Portfolio/HomeController.php:19
 * @route '/'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Portfolio\HomeController::index
 * @see app/Http/Controllers/Portfolio/HomeController.php:19
 * @route '/'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Portfolio\HomeController::downloadResume
 * @see app/Http/Controllers/Portfolio/HomeController.php:39
 * @route '/resume/download'
 */
export const downloadResume = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadResume.url(options),
    method: 'get',
})

downloadResume.definition = {
    methods: ["get","head"],
    url: '/resume/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Portfolio\HomeController::downloadResume
 * @see app/Http/Controllers/Portfolio/HomeController.php:39
 * @route '/resume/download'
 */
downloadResume.url = (options?: RouteQueryOptions) => {
    return downloadResume.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Portfolio\HomeController::downloadResume
 * @see app/Http/Controllers/Portfolio/HomeController.php:39
 * @route '/resume/download'
 */
downloadResume.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadResume.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Portfolio\HomeController::downloadResume
 * @see app/Http/Controllers/Portfolio/HomeController.php:39
 * @route '/resume/download'
 */
downloadResume.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadResume.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Portfolio\HomeController::downloadResume
 * @see app/Http/Controllers/Portfolio/HomeController.php:39
 * @route '/resume/download'
 */
    const downloadResumeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadResume.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Portfolio\HomeController::downloadResume
 * @see app/Http/Controllers/Portfolio/HomeController.php:39
 * @route '/resume/download'
 */
        downloadResumeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadResume.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Portfolio\HomeController::downloadResume
 * @see app/Http/Controllers/Portfolio/HomeController.php:39
 * @route '/resume/download'
 */
        downloadResumeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadResume.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadResume.form = downloadResumeForm
const HomeController = { index, downloadResume }

export default HomeController