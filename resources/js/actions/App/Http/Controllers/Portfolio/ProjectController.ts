import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Portfolio\ProjectController::index
 * @see app/Http/Controllers/Portfolio/ProjectController.php:13
 * @route '/projects'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/projects',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Portfolio\ProjectController::index
 * @see app/Http/Controllers/Portfolio/ProjectController.php:13
 * @route '/projects'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Portfolio\ProjectController::index
 * @see app/Http/Controllers/Portfolio/ProjectController.php:13
 * @route '/projects'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Portfolio\ProjectController::index
 * @see app/Http/Controllers/Portfolio/ProjectController.php:13
 * @route '/projects'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Portfolio\ProjectController::index
 * @see app/Http/Controllers/Portfolio/ProjectController.php:13
 * @route '/projects'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Portfolio\ProjectController::index
 * @see app/Http/Controllers/Portfolio/ProjectController.php:13
 * @route '/projects'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Portfolio\ProjectController::index
 * @see app/Http/Controllers/Portfolio/ProjectController.php:13
 * @route '/projects'
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
* @see \App\Http\Controllers\Portfolio\ProjectController::show
 * @see app/Http/Controllers/Portfolio/ProjectController.php:36
 * @route '/projects/{project}'
 */
export const show = (args: { project: string | { slug: string } } | [project: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/projects/{project}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Portfolio\ProjectController::show
 * @see app/Http/Controllers/Portfolio/ProjectController.php:36
 * @route '/projects/{project}'
 */
show.url = (args: { project: string | { slug: string } } | [project: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { project: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.slug
                : args.project,
                }

    return show.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Portfolio\ProjectController::show
 * @see app/Http/Controllers/Portfolio/ProjectController.php:36
 * @route '/projects/{project}'
 */
show.get = (args: { project: string | { slug: string } } | [project: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Portfolio\ProjectController::show
 * @see app/Http/Controllers/Portfolio/ProjectController.php:36
 * @route '/projects/{project}'
 */
show.head = (args: { project: string | { slug: string } } | [project: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Portfolio\ProjectController::show
 * @see app/Http/Controllers/Portfolio/ProjectController.php:36
 * @route '/projects/{project}'
 */
    const showForm = (args: { project: string | { slug: string } } | [project: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Portfolio\ProjectController::show
 * @see app/Http/Controllers/Portfolio/ProjectController.php:36
 * @route '/projects/{project}'
 */
        showForm.get = (args: { project: string | { slug: string } } | [project: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Portfolio\ProjectController::show
 * @see app/Http/Controllers/Portfolio/ProjectController.php:36
 * @route '/projects/{project}'
 */
        showForm.head = (args: { project: string | { slug: string } } | [project: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const ProjectController = { index, show }

export default ProjectController