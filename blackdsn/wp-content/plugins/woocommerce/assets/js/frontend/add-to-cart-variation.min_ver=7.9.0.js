!function(t,a,i,e){var r=function(t){var a=this;a.$form=t,a.$attributeFields=t.find(".variations select"),a.$singleVariation=t.find(".single_variation"),a.$singleVariationWrap=t.find(".single_variation_wrap"),a.$resetVariations=t.find(".reset_variations"),a.$product=t.closest(".product"),a.variationData=t.data("product_variations"),a.useAjax=!1===a.variationData,a.xhr=!1,a.loading=!0,a.$singleVariationWrap.show(),a.$form.off(".wc-variation-form"),a.getChosenAttributes=a.getChosenAttributes.bind(a),a.findMatchingVariations=a.findMatchingVariations.bind(a),a.isMatch=a.isMatch.bind(a),a.toggleResetLink=a.toggleResetLink.bind(a),t.on("click.wc-variation-form",".reset_variations",{variationForm:a},a.onReset),t.on("reload_product_variations",{variationForm:a},a.onReload),t.on("hide_variation",{variationForm:a},a.onHide),t.on("show_variation",{variationForm:a},a.onShow),t.on("click",".single_add_to_cart_button",{variationForm:a},a.onAddToCart),t.on("reset_data",{variationForm:a},a.onResetDisplayedVariation),t.on("reset_image",{variationForm:a},a.onResetImage),t.on("change.wc-variation-form",".variations select",{variationForm:a},a.onChange),t.on("found_variation.wc-variation-form",{variationForm:a},a.onFoundVariation),t.on("check_variations.wc-variation-form",{variationForm:a},a.onFindVariation),t.on("update_variation_values.wc-variation-form",{variationForm:a},a.onUpdateAttributes),setTimeout((function(){t.trigger("check_variations"),t.trigger("wc_variation_form",a),a.loading=!1}),100)},o=(r.prototype.onReset=function(t){t.preventDefault(),t.data.variationForm.$attributeFields.val("").trigger("change"),t.data.variationForm.$form.trigger("reset_data")},r.prototype.onReload=function(t){(t=t.data.variationForm).variationData=t.$form.data("product_variations"),t.useAjax=!1===t.variationData,t.$form.trigger("check_variations")},r.prototype.onHide=function(t){t.preventDefault(),t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-is-unavailable").addClass("disabled wc-variation-selection-needed"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")},r.prototype.onShow=function(a,i,e){a.preventDefault(),e?(a.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("disabled wc-variation-selection-needed wc-variation-is-unavailable"),a.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-disabled").addClass("woocommerce-variation-add-to-cart-enabled")):(a.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-selection-needed").addClass("disabled wc-variation-is-unavailable"),a.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")),wp.mediaelement&&a.data.variationForm.$form.find(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter((function(){return!t(this).parent().hasClass("mejs-mediaelement")})).mediaelementplayer(wp.mediaelement.settings)},r.prototype.onAddToCart=function(i){t(this).is(".disabled")&&(i.preventDefault(),t(this).is(".wc-variation-is-unavailable")?a.alert(wc_add_to_cart_variation_params.i18n_unavailable_text):t(this).is(".wc-variation-selection-needed")&&a.alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text))},r.prototype.onResetDisplayedVariation=function(t){(t=t.data.variationForm).$product.find(".product_meta").find(".sku").wc_reset_content(),t.$product.find(".product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value").wc_reset_content(),t.$product.find(".product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value").wc_reset_content(),t.$form.trigger("reset_image"),t.$singleVariation.slideUp(200).trigger("hide_variation")},r.prototype.onResetImage=function(t){t.data.variationForm.$form.wc_variations_image_update(!1)},r.prototype.onFindVariation=function(a,i){var e=a.data.variationForm,r=void 0!==i?i:e.getChosenAttributes();a=r.data;r.count&&r.count===r.chosenCount?e.useAjax?(e.xhr&&e.xhr.abort(),e.$form.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),a.product_id=parseInt(e.$form.data("product_id"),10),a.custom_data=e.$form.data("custom_data"),e.xhr=t.ajax({url:wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%","get_variation"),type:"POST",data:a,success:function(t){t?e.$form.trigger("found_variation",[t]):(e.$form.trigger("reset_data"),r.chosenCount=0,e.loading||(e.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),e.$form.find(".wc-no-matching-variations").slideDown(200)))},complete:function(){e.$form.unblock()}})):(e.$form.trigger("update_variation_values"),(i=e.findMatchingVariations(e.variationData,a).shift())?e.$form.trigger("found_variation",[i]):(e.$form.trigger("reset_data"),r.chosenCount=0,e.loading||(e.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),e.$form.find(".wc-no-matching-variations").slideDown(200)))):(e.$form.trigger("update_variation_values"),e.$form.trigger("reset_data")),e.toggleResetLink(0<r.chosenCount)},r.prototype.onFoundVariation=function(a,i){var e=(a=a.data.variationForm).$product.find(".product_meta").find(".sku"),r=a.$product.find(".product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value"),o=a.$product.find(".product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value"),s=a.$singleVariationWrap.find('.quantity input.qty[name="quantity"]'),c=s.closest(".quantity"),_=!0,d=!1,m="";i.sku?e.wc_set_content(i.sku):e.wc_reset_content(),i.weight?r.wc_set_content(i.weight_html):r.wc_reset_content(),i.dimensions?o.wc_set_content(t.parseHTML(i.dimensions_html)[0].data):o.wc_reset_content(),a.$form.wc_variations_image_update(i),i.variation_is_visible?(d=n("variation-template"),i.variation_id):d=n("unavailable-variation-template"),m=(m=(m=d({variation:i})).replace("/*<![CDATA[*/","")).replace("/*]]>*/",""),a.$singleVariation.html(m),a.$form.find('input[name="variation_id"], input.variation_id').val(i.variation_id).trigger("change"),"yes"===i.is_sold_individually?(s.val("1").attr("min","1").attr("max","").trigger("change"),c.hide()):(e=parseFloat(s.val()),e=isNaN(e)||(e=e>parseFloat(i.max_qty)?i.max_qty:e)<parseFloat(i.min_qty)?i.min_qty:e,s.attr("min",i.min_qty).attr("max",i.max_qty).val(e).trigger("change"),c.show()),i.is_purchasable&&i.is_in_stock&&i.variation_is_visible||(_=!1),(a.$singleVariation.text().trim()?a.$singleVariation.slideDown(200):a.$singleVariation.show()).trigger("show_variation",[i,_])},r.prototype.onChange=function(t){(t=t.data.variationForm).$form.find('input[name="variation_id"], input.variation_id').val("").trigger("change"),t.$form.find(".wc-no-matching-variations").remove(),t.useAjax||t.$form.trigger("woocommerce_variation_select_change"),t.$form.trigger("check_variations"),t.$form.trigger("woocommerce_variation_has_changed")},r.prototype.addSlashes=function(t){return(t=t.replace(/'/g,"\\'")).replace(/"/g,'\\"')},r.prototype.onUpdateAttributes=function(a){var i=a.data.variationForm,e=i.getChosenAttributes().data;i.useAjax||(i.$attributeFields.each((function(a,r){var o,n=t(r),s=n.data("attribute_name")||n.attr("name"),c=(r=t(r).data("show_option_none"),":gt(0)"),_=t("<select/>"),d=n.val()||"",m=!0,l=(n.data("attribute_html")||((l=n.clone()).find("option").removeAttr("attached").prop("disabled",!1).prop("selected",!1),n.data("attribute_options",l.find("option"+c).get()),n.data("attribute_html",l.html())),_.html(n.data("attribute_html")),t.extend(!0,{},e)),v=(l[s]="",i.findMatchingVariations(i.variationData,l));for(o in v)if(void 0!==v[o]){var g,u=v[o].attributes;for(g in u)if(u.hasOwnProperty(g)){var f=u[g],h="";if(g===s)if(v[o].variation_is_active&&(h="enabled"),f){f=t("<div/>").html(f).text();var p=_.find("option");if(p.length)for(var w=0,b=p.length;w<b;w++){var $=t(p[w]);if(f===$.val()){$.addClass("attached "+h);break}}}else _.find("option:gt(0)").addClass("attached "+h)}}l=_.find("option.attached").length,d&&(m=!1,0!==l)&&_.find("option.attached.enabled").each((function(){var a=t(this).val();if(d===a)return!(m=!0)})),0<l&&d&&m&&"no"===r&&(_.find("option:first").remove(),c=""),_.find("option"+c+":not(.attached)").remove(),n.html(_.html()),n.find("option"+c+":not(.enabled)").prop("disabled",!0),d?m?n.val(d):n.val("").trigger("change"):n.val("")})),i.$form.trigger("woocommerce_update_variation_values"))},r.prototype.getChosenAttributes=function(){var a={},i=0,e=0;return this.$attributeFields.each((function(){var r=t(this).data("attribute_name")||t(this).attr("name"),o=t(this).val()||"";0<o.length&&e++,i++,a[r]=o})),{count:i,chosenCount:e,data:a}},r.prototype.findMatchingVariations=function(t,a){for(var i=[],e=0;e<t.length;e++){var r=t[e];this.isMatch(r.attributes,a)&&i.push(r)}return i},r.prototype.isMatch=function(t,a){var i,r,o,n=!0;for(i in t)t.hasOwnProperty(i)&&(r=t[i],o=a[i],r!==e)&&o!==e&&0!==r.length&&0!==o.length&&r!==o&&(n=!1);return n},r.prototype.toggleResetLink=function(t){t?"hidden"===this.$resetVariations.css("visibility")&&this.$resetVariations.css("visibility","visible").hide().fadeIn():this.$resetVariations.css("visibility","hidden")},t.fn.wc_variation_form=function(){return new r(this),this},t.fn.wc_set_content=function(t){e===this.attr("data-o_content")&&this.attr("data-o_content",this.text()),this.text(t)},t.fn.wc_reset_content=function(){e!==this.attr("data-o_content")&&this.text(this.attr("data-o_content"))},t.fn.wc_set_variation_attr=function(t,a){e===this.attr("data-o_"+t)&&this.attr("data-o_"+t,this.attr(t)?this.attr(t):""),!1===a?this.removeAttr(t):this.attr(t,a)},t.fn.wc_reset_variation_attr=function(t){e!==this.attr("data-o_"+t)&&this.attr(t,this.attr("data-o_"+t))},t.fn.wc_maybe_trigger_slide_position_reset=function(a){var i=t(this),e=i.closest(".product").find(".images"),r=!1;a=a&&a.image_id?a.image_id:"";i.attr("current-image")!==a&&(r=!0),i.attr("current-image",a),r&&e.trigger("woocommerce_gallery_reset_slide_position")},t.fn.wc_variations_image_update=function(i){var e,r=this,o=(e=r.closest(".product")).find(".images"),n=(e=e.find(".flex-control-nav")).find("li:eq(0) img"),s=o.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),c=s.find(".wp-post-image"),_=s.find("a").eq(0);if(i&&i.image&&i.image.src&&1<i.image.src.length){if(0<e.find('li img[data-o_src="'+i.image.gallery_thumbnail_src+'"]').length&&r.wc_variations_image_reset(),0<(e=e.find('li img[src="'+i.image.gallery_thumbnail_src+'"]')).length)return e.trigger("click"),r.attr("current-image",i.image_id),void a.setTimeout((function(){t(a).trigger("resize"),o.trigger("woocommerce_gallery_init_zoom")}),20);c.wc_set_variation_attr("src",i.image.src),c.wc_set_variation_attr("height",i.image.src_h),c.wc_set_variation_attr("width",i.image.src_w),c.wc_set_variation_attr("srcset",i.image.srcset),c.wc_set_variation_attr("sizes",i.image.sizes),c.wc_set_variation_attr("title",i.image.title),c.wc_set_variation_attr("data-caption",i.image.caption),c.wc_set_variation_attr("alt",i.image.alt),c.wc_set_variation_attr("data-src",i.image.full_src),c.wc_set_variation_attr("data-large_image",i.image.full_src),c.wc_set_variation_attr("data-large_image_width",i.image.full_src_w),c.wc_set_variation_attr("data-large_image_height",i.image.full_src_h),s.wc_set_variation_attr("data-thumb",i.image.src),n.wc_set_variation_attr("src",i.image.gallery_thumbnail_src),_.wc_set_variation_attr("href",i.image.full_src)}else r.wc_variations_image_reset();a.setTimeout((function(){t(a).trigger("resize"),r.wc_maybe_trigger_slide_position_reset(i),o.trigger("woocommerce_gallery_init_zoom")}),20)},t.fn.wc_variations_image_reset=function(){var t=(a=this.closest(".product")).find(".images"),a=a.find(".flex-control-nav").find("li:eq(0) img"),i=(t=t.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0)).find(".wp-post-image"),e=t.find("a").eq(0);i.wc_reset_variation_attr("src"),i.wc_reset_variation_attr("width"),i.wc_reset_variation_attr("height"),i.wc_reset_variation_attr("srcset"),i.wc_reset_variation_attr("sizes"),i.wc_reset_variation_attr("title"),i.wc_reset_variation_attr("data-caption"),i.wc_reset_variation_attr("alt"),i.wc_reset_variation_attr("data-src"),i.wc_reset_variation_attr("data-large_image"),i.wc_reset_variation_attr("data-large_image_width"),i.wc_reset_variation_attr("data-large_image_height"),t.wc_reset_variation_attr("data-thumb"),a.wc_reset_variation_attr("src"),e.wc_reset_variation_attr("href")},t((function(){"undefined"!=typeof wc_add_to_cart_variation_params&&t(".variations_form").each((function(){t(this).wc_variation_form()}))})),{find_matching_variations:function(t,a){for(var i=[],e=0;e<t.length;e++){var r=t[e];o.variations_match(r.attributes,a)&&i.push(r)}return i},variations_match:function(t,a){var i,r,o,n=!0;for(i in t)t.hasOwnProperty(i)&&(r=t[i],o=a[i],r!==e)&&o!==e&&0!==r.length&&0!==o.length&&r!==o&&(n=!1);return n}}),n=function(t){var e=i.getElementById("tmpl-"+t).textContent;return/<#\s?data\./.test(e)||/{{{?\s?data\.(?!variation\.).+}}}?/.test(e)||/{{{?\s?data\.variation\.[\w-]*[^\s}]/.test(e)?wp.template(t):function(t){var i=t.variation||{};return e.replace(/({{{?)\s?data\.variation\.([\w-]*)\s?(}}}?)/g,(function(t,e,r,o){return e.length!==o.length?"":(o=i[r]||"",2===e.length?a.escape(o):o)}))}}}(jQuery,window,document);