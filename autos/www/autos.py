import frappe

@frappe.whitelist()
def get_chat_response(user_input=None):
        return "Only 'Sales Order' allowed in this conversation. Please! type 'Sales order' for buy."

@frappe.whitelist()
def get_item(name, item_code):
    item_has = frappe.db.exists({"doctype": "Item", "item_code": item_code})
    if item_has:
        return "Item exists! Please type 'Yes' for your order confirmation"
    else:
        return "Sorry your desire Item is not exists. But I make invoke to the admministraation about your need. You will be notified when its available"

