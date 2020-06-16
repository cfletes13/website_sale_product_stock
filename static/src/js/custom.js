
//console.log("custom js caleedddddddddddddddddddddddddddddddddd")
/*odoo.define('website_sale_product_stock.website_sale_product_stock', function(require) {
    "use strict";
    var core = require('web.core');
    var _t = core._t;
    $(document).ready(function() {
			
            var $form_data = $('div.js_product').closest('form');
            var $js_qty = $form_data.find('.css_quantity.input-group.oe_website_spinner');

			var $stock_qty_message = $('div.out-of-stock');
		    if($stock_qty_message.length === 1){
		        $('#add_to_cart').hide();
		        $js_qty.hide();
		    } else {
				$('#add_to_cart').show();
                $js_qty.show();
		    }

    });
});;
*/

//console.log("custom js caleedddddddddddddddddddddddddddddddddd")
odoo.define('website_sale_product_stock.website_sale_product_stock', function(require) {
    "use strict";
    var core = require('web.core');
    var _t = core._t;
    
    var ajax = require('web.ajax');
    $(document).ready(function() {
    	$('.oe_website_sale').each(function () {
		    var oe_website_sale = this;
			//console.log("custom js caleedddddddddddddddddddddddddddddddddd")
			
            show_hide_stock_change();
            $(oe_website_sale).on('change', function(ev) {
                //console.log("111111111111111111 js caleedddddddddddddddddddddddddddddddddd")
                show_hide_stock_change();
            });
            
            
   			$(oe_website_sale).on("change", 'input[name="add_qty"]', function (event) {
		        var product_ids = [];
		        var product_dom = $(".js_product .js_add_cart_variants[data-attribute_value_ids]");
		        var qty = $(event.target).closest('form').find('input[name="add_qty"]').val();
		        //console.log("***********************qty",qty)
		        
		        
		        var $form_data = $('div.js_product').closest('form');
		        var $js_qty = $form_data.find('.css_quantity.input-group.oe_website_spinner');
		        //console.log("###############################$form_data",$form_data)
		        if ($("input[name='product_id']").is(':radio')){
		            var product_id = $form_data.find("input[name='product_id']:checked").val();
		            //console.log("11111111111111111 product_id",product_id)
		        } else {
		            var product_id = $form_data.find("input[name='product_id']").val();
		            //console.log("222222222222222222 product_id",product_id)
		        	
		        var qty_available = $form_data.find('#' + product_id).attr('value');
		        //console.log("qty_available^^^^^^^^^^^^^^^^^^^^^^^^^^",qty_available);
		        if (qty_available < parseFloat(qty || 0)) {
		            //console.log("iffffffffffffffffffffffffffffffffffffffff")
		            //$('#add_to_cart').hide();
		            //_qty.hide();
		            
		            var qty = $(event.target).closest('form').find('input[name="add_qty"]').val(parseInt(qty_available));
		            //console.log("22222222222222222222222 ***********************qty",qty)
		            
		            $('input[name="add_qty"]').popover({
						animation: true,
						//html: true,
						title: _t('DENIED'),
						container: 'body',
						trigger: 'focus',
				        placement: 'top',
				        html: true,
				        content: _t('You Can Not Add More than Available Quantity'),
                    });
                    $('input[name="add_qty"]').popover('show');
                    setTimeout(function() {
                        $('input[name="add_qty"]').popover('destroy')
                    }, 5000);

                        
		        } else {
		            //console.log("elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
		            //$('#add_to_cart').show();
		            //$js_qty.show();
		        }
		        
		        
		        }
		        
            });


   			$(oe_website_sale).on("change", '.oe_cart input.js_quantity[data-product-id]', function (event) {
		        var product_ids = [];
		        var product_dom = $(".js_product .js_add_cart_variants[data-attribute_value_ids]");
		        var qty = $(this).val();
		        //console.log("***********************qty",qty)
		        
		        
		        var $form_data = $('div.js_product').closest('form');
		        var $js_qty = $form_data.find('.css_quantity.input-group.oe_website_spinner');
		        //console.log("###############################$form_data",$form_data)
		        if ($("input[name='product_id']").is(':radio')){
		            var product_id = $form_data.find("input[name='product_id']:checked").val();
		            //console.log("11111111111111111 product_id",product_id)
		        } else {
		            var product_id = $form_data.find("input[name='product_id']").val();
		            //console.log("222222222222222222 product_id",product_id)
		        	
		        var qty_available = parseInt($(this).data('qty'),10);
		        console.log("1111111111111 qty_available 1111111111111111111",qty_available);
		        if (qty_available < qty) {
		            //console.log("iffffffffffffffffffffffffffffffffffffffff")
		            //$('#add_to_cart').hide();
		            //_qty.hide();
		            
		            var qty = $(this).val(qty_available);
		            //console.log("22222222222222222222222 ***********************qty",qty)
		            
		            $('.js_quantity').popover({
						animation: true,
						//html: true,
						title: _t('DENIED'),
						container: 'body',
						trigger: 'focus',
				        placement: 'top',
				        html: true,
				        content: _t('You Can Not Add More than Available Quantity'),
                    });
                    $('.js_quantity').popover('show');
                    setTimeout(function() {
                        $('.js_quantity').popover('destroy')
                    }, 1000);

                        
		        } else {
		            //console.log("elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
		            //$('#add_to_cart').show();
		            //$js_qty.show();
		        }
		        
		        
		        }
		        
            });
            
                        
            
        });
        
		function show_hide_stock_change() {
		        var $form_data = $('div.js_product').closest('form');
		        var $js_qty = $form_data.find('.css_quantity.input-group.oe_website_spinner');
		        //console.log("***********************$form_data",$form_data)
		        if ($("input[name='product_id']").is(':radio')){
		            var product_id = $form_data.find("input[name='product_id']:checked").val();
		            //console.log("11111111111111111 product_id",product_id)
		        } else {
		            var product_id = $form_data.find("input[name='product_id']").val();
		            //console.log("222222222222222222 product_id",product_id)
		        	
		        var qty_available = $form_data.find('#' + product_id).attr('value');
		        //console.log("qty_available^^^^^^^^^^^^^^^^^^^^^^^^^^",qty_available,$form_data.find('#' + product_id))
		        $form_data.find('.show_hide_stock_change').hide();
		        $form_data.find('#' + product_id).show();
		        //console.log("$form_datallllllllllllllllllllllllllllll",$form_data)
		        if (qty_available <= 0) {
		            //console.log("iffffffffffffffffffffffffffffffffffffffff")
		            $('#add_to_cart').hide();
		            $js_qty.hide();
		        } else {
		            //console.log("elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
		            $('#add_to_cart').show();
		            $js_qty.show();
		        }
		    }}
		});
});;   
