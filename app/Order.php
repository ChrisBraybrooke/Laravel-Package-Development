<?php

namespace App;

use ChrisBraybrooke\ECommerce\Models\Order as BaseOrder;

class Order extends BaseOrder
{

    public static $statuses = [
      'STATUS_DRAFT' => 'Draft',
      'STATUS_PROFORMA' => 'Pro-Forma',
      'STATUS_PROCESSING' => 'Paid',
      'STATUS_COMPLETED' => 'Completed',
      'STATUS_CANCELLED' => 'Canceled',
      'STATUS_REFUNDED' => 'Refunded',
      'STATUS_AWAITING_PAYMENT' => 'Awaiting Payment',
      'STATUS_PAYMENT_FAILED' => 'Failed Payment',
      'STATUS_ESTIMATE' => 'Estimate',
    ];

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
