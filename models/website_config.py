# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.

from odoo import fields, models, api, _

class website(models.Model):
    _inherit = 'website'
    
    def get_website_config(self):
        config_ids = self.env["ir.config_parameter"].sudo().get_param('website_sale_product_stock.stock_type') 
        return str(config_ids) 


class website_config(models.TransientModel):
    _inherit = 'res.config.settings'
    
    stock_type = fields.Selection([('available', 'Qty On Hand'), ('outgoing', 'Qty Available')], default='available', string='Stock Type', help='Display Different stock type in Website.')
    

    def get_values(self):
        res = super(website_config, self).get_values()
        res.update(stock_type = self.env['ir.config_parameter'].sudo().get_param('website_sale_product_stock.stock_type', default='available'))
        return res
    def set_values(self):
        super(website_config, self).set_values()
        self.env['ir.config_parameter'].sudo().set_param('website_sale_product_stock.stock_type', self.stock_type)


	
	

