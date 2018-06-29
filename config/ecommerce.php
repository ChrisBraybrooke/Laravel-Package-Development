<?php

/**
 * Your package config would go here
 */

$green = '#93d250';
$red = '#fe0002';
$blue = '#66cbff';

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

      //
      'payment' => ChrisBraybrooke\ECommerce\Models\Payment::class,
  ],

  'shop_data' => [

      //
      'collection_mappings' => ['Home Header Collection', 'Home Panels Collection', 'Product Categories Collection'],

      //
      'site_images' => ['Website Logo', 'Website Logo Inverse'],

      //
      'aditional_cols' => [

          'orders' => [
              'Job Number' => [
                  'prop' => 'ref_number',
                  'sortable' => true,
                  'label' => 'Job No.',
                  'align' => 'left',
                  'resizable' => true,
                  'type' => 'button',
                  'filled_background' => $green,
                  'value' => 'content.data.$[content_name=In Production].content.date',
                  'width' => '130px',
                  'button' => [
                      'type' => 'success',
                      'plain' => true,
                      'size' => 'mini',
                      'text' => 'In Production',
                      'only_show_hover' => true,
                      'show_value' => true,
                      'value' => 'ref_number',
                      'hide_if_value' => true
                  ],
                  'action' => [
                      'type' => 'api',
                      'set' => 'content.data.$[content_name=In Production].content.date',
                      'value' => now()->format('d-m-Y')
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
                  'empty_background' => $red,
                  'filled_background' => $green,
                  'width' => '100px',
                  'value' => 'content.data.$[content_name=Spec Completed].content.date',
                  'button' => [
                      'type' => 'danger',
                      'plain' => true,
                      'size' => 'mini',
                      'text' => 'Complete',
                      'show_value' => true,
                      'value' => 'content.data.$[content_name=Spec Completed].content.date',
                      'hide_if_value' => true
                  ],
                  'action' => [
                      'type' => 'api',
                      'set' => 'content.data.$[content_name=Spec Completed].content.date',
                      'value' => now()->format('d-m-Y')
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
                  'empty_background' => $red,
                  'filled_background' => $green,
                  'width' => '100px',
                  'value' => 'content.data.$[content_name=Materials Ordered].content.date',
                  'button' => [
                      'type' => 'danger',
                      'plain' => true,
                      'size' => 'mini',
                      'text' => 'Ordered',
                      'show_value' => true,
                      'value' => 'content.data.$[content_name=Materials Ordered].content.date',
                      'hide_if_value' => true
                  ],
                  'action' => [
                      'type' => 'api',
                      'set' => 'content.data.$[content_name=Materials Ordered].content.date',
                      'value' => now()->format('d-m-Y')
                  ],
                  'api' => [
                      'method' => 'put',
                      'path' => 'orders/${id}'
                  ]
              ],
              'Delivery' => [
                  'prop' => 'shipping_completed',
                  'sortable' => true,
                  'label' => 'Delivery',
                  'align' => 'left',
                  'resizable' => true,
                  'type' => 'button',
                  'empty_background' => $red,
                  'filled_background' => $green,
                  'width' => '100px',
                  'value' => 'content.data.$[content_name=Delivery Information].content.date',
                  'button' => [
                      'type' => 'danger',
                      'plain' => true,
                      'size' => 'mini',
                      'text' => 'Complete',
                      'show_value' => true,
                      'value' => 'content.data.$[content_name=Delivery Information].content.date',
                      'hide_if_value' => true
                  ],
                  'action' => [
                      'type' => 'api',
                      'set' => 'content.data.$[content_name=Delivery Information].content.date',
                      'value' => now()->format('d-m-Y')
                  ],
                  'api' => [
                      'method' => 'put',
                      'path' => 'orders/${id}'
                  ]
              ],
              'Delivery Cost' => [
                  'prop' => 'shipping_cost',
                  'sortable' => true,
                  'label' => 'Delivery Cost',
                  'align' => 'left',
                  'resizable' => true,
                  'type' => 'number',
                  'empty_background' => $red,
                  'filled_background' => $green,
                  'width' => '120px',
                  'value' => 'content.data.$[content_name=Delivery Information].content.cost',
                  'number' => [
                      'controls' => false
                  ],
                  'action' => [
                      'type' => 'api',
                      'set' => 'content.data.$[content_name=Delivery Information].content.cost',
                  ],
                  'api' => [
                      'method' => 'put',
                      'path' => 'orders/${id}'
                  ]
              ],
              'Delivery Invoice' => [
                  'prop' => 'shipping_invoice',
                  'sortable' => true,
                  'label' => 'Delivery Invoice',
                  'align' => 'left',
                  'resizable' => true,
                  'type' => 'button',
                  'empty_background' => $red,
                  'filled_background' => $green,
                  'width' => '130px',
                  'value' => 'content.data.$[content_name=Delivery Information].content.invoice',
                  'button' => [
                      'type' => 'danger',
                      'plain' => true,
                      'size' => 'mini',
                      'text' => 'Recieved',
                      'show_value' => true,
                      'value' => 'content.data.$[content_name=Delivery Information].content.invoice',
                      'hide_if_value' => true
                  ],
                  'action' => [
                      'type' => 'api',
                      'set' => 'content.data.$[content_name=Delivery Information].content.invoice',
                      'value' => now()->format('d-m-Y')
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
                  'name' => 'Delivery',
                  'if' => 'status',
                  'value' => 'Processing',
                  'colour' => $blue
              ],
              [
                  'name' => 'Delivery',
                  'if' => 'status',
                  'value' => 'Completed',
                  'colour' => $green
              ]
          ]
      ],
  ],

  'default_content' => [

      'orders' => [
          ['content_name' => 'Delivery Information', 'content' => ['date' => '', 'reference' => '', 'cost' => '', 'invoice' => ''], 'type' => 'json', 'order' => 1],
          ['content_name' => 'In Production', 'content' => ['date' => '', 'notes' => ''], 'type' => 'json', 'order' => 2],
          ['content_name' => 'Delivery Date', 'content' => ['date' => ''], 'type' => 'json', 'order' => 3],
          ['content_name' => 'Spec Completed', 'content' => ['date' => ''], 'type' => 'json', 'order' => 4],
          ['content_name' => 'Materials Ordered', 'content' => ['date' => ''], 'type' => 'json', 'order' => 5],
      ],
      'products' => [
          ['content_name' => 'Main Content', 'content' => '', 'type' => 'quill'],
          ['content_name' => 'Snippet', 'content' => '', 'type' => 'text']
      ],
  ],

];
