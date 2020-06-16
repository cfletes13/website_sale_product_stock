# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Website Product Stock',
    'description': """This module is used to manage stock on webshop, stock on website, stock on eCommerce inculding following feature.
    Website Stock, Webshop stock, Stock on website, Show out of stock on website, Show Stock Quantity on webshop, Stock Quantity on Website, product stock on website, product quantity on website, website product quantity, website item quantity, webshop feature, manage website stock, manage stock, Out of stock in webshop, stock counter, item counter, product counter, Stock in website, stock in webshop, stock in shop, shop stock, stock shop, Quantity on shop, item on shop, Shop Quantity, item Shop, Item quantity on shop. Show Product stock on website, Display Out of stock tag when stock not available, display stock in Webshop interface also the seller can select and display different type of stock like "Qty on hand" and "Qty Available" in Website Configuration from back-end and, also Enable/disable stock messages and validation from the webshop.""" ,
    'summary': 'Show Product stock on website, Display Out of stock tag when stock not available',
    'category': 'eCommerce',
    'version': '12.0.0.0',
    'author': 'BrowseInfo',
    'depends': ['website','website_sale','stock'],
    'data': [
        'security/ir.model.access.csv',
        'views/template.xml',
    ],
    'application': True,
    'installable': True,
    "images":['static/description/Banner.png'],
}

# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
