import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Portfolio\ContactController::store
 * @see app/Http/Controllers/Portfolio/ContactController.php:31
 * @route '/contact'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/contact',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Portfolio\ContactController::store
 * @see app/Http/Controllers/Portfolio/ContactController.php:31
 * @route '/contact'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Portfolio\ContactController::store
 * @see app/Http/Controllers/Portfolio/ContactController.php:31
 * @route '/contact'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Portfolio\ContactController::store
 * @see app/Http/Controllers/Portfolio/ContactController.php:31
 * @route '/contact'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Portfolio\ContactController::store
 * @see app/Http/Controllers/Portfolio/ContactController.php:31
 * @route '/contact'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const contact = {
    store: Object.assign(store, store),
}

export default contact