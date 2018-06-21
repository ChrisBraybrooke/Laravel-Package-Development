<?php

/**
 * Your package config would go here
 */

return [

  'web_uri' => env('ECOMMERCE_WEB_URI', 'admin'),


  'web_middleware' => env('ECOMMERCE_WEB_MIDDLEWARE', 'web'),


  'api_uri' => env('ECOMMERCE_API_URI', 'api/ecommerce'),

  'models' => [

      //
      'collection' => ChrisBraybrooke\ECommerce\Models\Collection::class,

      //
      'collection_type' => ChrisBraybrooke\ECommerce\Models\CollectionType::class,

      //
      'content' => ChrisBraybrooke\ECommerce\Models\Content::class,

      //
      'gallery' => ChrisBraybrooke\ECommerce\Models\Gallery::class,

      //
      'log' => ChrisBraybrooke\ECommerce\Models\Log::class,

      //
      'media' => ChrisBraybrooke\ECommerce\Models\Media::class,

      //
      'order' => App\Order::class,

      //
      'page' => ChrisBraybrooke\ECommerce\Models\Page::class,

      //
      'permission' => ChrisBraybrooke\ECommerce\Models\Permission::class,

      //
      'product' => ChrisBraybrooke\ECommerce\Models\Product::class,

      //
      'product_customisation' => ChrisBraybrooke\ECommerce\Models\ProductCustomisation::class,

      //
      'product_customisation_option' => ChrisBraybrooke\ECommerce\Models\ProductCustomisationOption::class,

      //
      'role' => ChrisBraybrooke\ECommerce\Models\Role::class,

      //
      'form' => ChrisBraybrooke\ECommerce\Models\Form::class,

      //
      'form_field' => ChrisBraybrooke\ECommerce\Models\FormField::class,

      //
      'form_section' => ChrisBraybrooke\ECommerce\Models\FormSection::class,

      //
      'menu' => ChrisBraybrooke\ECommerce\Models\Menu::class,

      //
      'language' => ChrisBraybrooke\ECommerce\Models\Language::class,

      //
      'currency' => ChrisBraybrooke\ECommerce\Models\Currency::class,
  ],

  'shop_data' => [

      //
      'collection_mappings' => ['Home Header Collection', 'Home Panels Collection', 'Product Categories Collection'],

      //
      'site_images' => ['Website Logo', 'Website Logo Inverse'],

      //
      'aditional_cols' => [

          'orders' => [
              'Shipping' => [
                  'prop' => 'shipping_completed',
                  'sortable' => true,
                  'label' => 'Shipping',
                  'align' => 'left',
                  'resizable' => true,
                  'type' => 'button',
                  'button' => [
                      'type' => 'success',
                      'plain' => true,
                      'size' => 'mini',
                      'text' => 'Shipping Complete'
                  ],
                  'action' => [
                      'type' => 'api',
                      'set' => 'content.data.$[content_name=Shipping Information].content.date',
                      'value' => now()->format('Y-m-d')
                  ],
                  'api' => [
                      'method' => 'put',
                      'path' => 'orders/${id}'
                  ]
              ],
              'Specs' => [
                  'prop' => 'specs_completed',
                  'sortable' => true,
                  'label' => 'Specs',
                  'align' => 'left',
                  'resizable' => true,
                  'type' => 'button',
                  'button' => [
                      'type' => 'success',
                      'plain' => true,
                      'size' => 'mini',
                      'text' => 'Shipping Complete'
                  ],
                  'action' => [
                      'type' => 'api',
                      'set' => 'content.data.$[content_name=Spec Completed].content.date',
                      'value' => now()->format('Y-m-d')
                  ],
                  'api' => [
                      'method' => 'put',
                      'path' => 'orders/${id}'
                  ]
              ],
              'Materials' => [
                  'prop' => 'materials_ordered',
                  'sortable' => true,
                  'label' => 'Materials',
                  'align' => 'left',
                  'resizable' => true,
                  'type' => 'button',
                  'button' => [
                      'type' => 'success',
                      'plain' => true,
                      'size' => 'mini',
                      'text' => 'Materials Ordered'
                  ],
                  'action' => [
                      'type' => 'api',
                      'set' => 'content.data.$[content_name=Materials Ordered].content.date',
                      'value' => now()->format('Y-m-d')
                  ],
                  'api' => [
                      'method' => 'put',
                      'path' => 'orders/${id}'
                  ]
              ],
          ]

      ],

      'col_colours' => [
          'orders' => [
              [
                  'if' => 'content.data.$[content_name=Materials Ordered].content.date',
                  'value' => '*',
                  'colour' => '#dc00002b'
              ],
              [
                  'if' => 'content.data.$[content_name=Spec Completed].content.date',
                  'value' => '*',
                  'colour' => 'rgb(0, 128, 0, 0.2)'
              ],
              [
                  'if' => 'content.data.$[content_name=Shipping Information].content.date',
                  'value' => '*',
                  'colour' => 'blue'
              ]
          ]
      ],
  ],

  'default_content' => [

      'orders' => [
          ['content_name' => 'Shipping Information', 'content' => ['paid' => '', 'cost' => '', 'date' => '', 'reference' => ''], 'type' => 'json', 'order' => 1],
          ['content_name' => 'Spec Completed', 'content' => ['date' => ''], 'type' => 'json', 'order' => 2],
          ['content_name' => 'Materials Ordered', 'content' => ['date' => ''], 'type' => 'json', 'order' => 3],
      ]
  ],

];
