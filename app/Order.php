<?php

namespace App;

use ChrisBraybrooke\ECommerce\Models\Order as BaseOrder;

class Order extends BaseOrder
{
    /**
     * The default content to create on creation
     *
     * @var array
     */
    public $defaultContent = [
        ['content_name' => 'Shipping Information', 'content' => ['paid' => '', 'cost' => '', 'date' => '', 'reference' => ''], 'type' => 'json', 'order' => 1],
        ['content_name' => 'Spec Completed', 'content' => ['date' => ''], 'type' => 'json', 'order' => 2],
        ['content_name' => 'Materials Ordered', 'content' => ['date' => ''], 'type' => 'json', 'order' => 3],
    ];
}
