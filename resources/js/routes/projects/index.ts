import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
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
const projects = {
    show: Object.assign(show, show),
}

export default projects