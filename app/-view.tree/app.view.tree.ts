namespace $ {
	export class $scale_app extends $mol_book2_catalog {
		
		/**
		 * ```tree
		 * plugins / <= Theme
		 * ```
		 */
		plugins() {
			return [
				this.Theme()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * menu_foot /
		 * 	<= Lights
		 * 	<= Centrifuge
		 * ```
		 */
		menu_foot() {
			return [
				this.Lights(),
				this.Centrifuge()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * menu_title \Scale Client 2.0
		 * ```
		 */
		menu_title() {
			return "Scale Client 2.0"
		}
		
		/**
		 * ```tree
		 * spreads *
		 * 	dash <= Dash
		 * 	stats <= Stats
		 * ```
		 */
		spreads() {
			return {
				dash: this.Dash(),
				stats: this.Stats()
			}
		}
		
		/**
		 * ```tree
		 * Theme $mol_theme_auto
		 * ```
		 */
		@ $mol_mem
		Theme() {
			const obj = new this.$.$mol_theme_auto()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Lights $mol_lights_toggle
		 * ```
		 */
		@ $mol_mem
		Lights() {
			const obj = new this.$.$mol_lights_toggle()
			
			return obj
		}
		
		/**
		 * ```tree
		 * autoNumber_IN
		 * ```
		 */
		autoNumber_IN() {
			return this.Centrifuge().autoNumber_channel_IN()
		}
		
		/**
		 * ```tree
		 * Centrifuge $scale_centrifuge autoNumber_channel_IN => autoNumber_IN
		 * ```
		 */
		@ $mol_mem
		Centrifuge() {
			const obj = new this.$.$scale_centrifuge()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Dash_body $scale_dash
		 * ```
		 */
		@ $mol_mem
		Dash_body() {
			const obj = new this.$.$scale_dash()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Form_enter_body $scale_form_enter
		 * ```
		 */
		@ $mol_mem
		Form_enter_body() {
			const obj = new this.$.$scale_form_enter()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Form_enter_close
		 * ```
		 */
		Form_enter_close() {
			return this.Form_enter().Spread_close()
		}
		
		/**
		 * ```tree
		 * Form_enter $mol_book2_catalog
		 * 	menu_body / <= Form_enter_body
		 * 	param \form_enter
		 * 	menu_title \Создать запись на въезд
		 * 	menu_tools / <= Spread_close
		 * 	Spread_close => Form_enter_close
		 * ```
		 */
		@ $mol_mem
		Form_enter() {
			const obj = new this.$.$mol_book2_catalog()
			
			obj.menu_body = () => [
				this.Form_enter_body()
			] as readonly any[]
			obj.param = () => "form_enter"
			obj.menu_title = () => "Создать запись на въезд"
			obj.menu_tools = () => [
				this.Spread_close()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Form_exit_body $scale_form_exit
		 * ```
		 */
		@ $mol_mem
		Form_exit_body() {
			const obj = new this.$.$scale_form_exit()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Form_close_close
		 * ```
		 */
		Form_close_close() {
			return this.Form_exit().Spread_close()
		}
		
		/**
		 * ```tree
		 * Form_exit $mol_book2_catalog
		 * 	menu_body / <= Form_exit_body
		 * 	param \form_exit
		 * 	menu_title \Создать запись на выезд
		 * 	menu_tools / <= Spread_close
		 * 	Spread_close => Form_close_close
		 * ```
		 */
		@ $mol_mem
		Form_exit() {
			const obj = new this.$.$mol_book2_catalog()
			
			obj.menu_body = () => [
				this.Form_exit_body()
			] as readonly any[]
			obj.param = () => "form_exit"
			obj.menu_title = () => "Создать запись на выезд"
			obj.menu_tools = () => [
				this.Spread_close()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Dash_close
		 * ```
		 */
		Dash_close() {
			return this.Dash().Spread_close()
		}
		
		/**
		 * ```tree
		 * Dash $mol_book2_catalog
		 * 	menu_body / <= Dash_body
		 * 	param \dash
		 * 	menu_title \Панель управления
		 * 	menu_tools / <= Spread_close
		 * 	Spread_close => Dash_close
		 * 	spreads *
		 * 		form_enter <= Form_enter
		 * 		form_exit <= Form_exit
		 * ```
		 */
		@ $mol_mem
		Dash() {
			const obj = new this.$.$mol_book2_catalog()
			
			obj.menu_body = () => [
				this.Dash_body()
			] as readonly any[]
			obj.param = () => "dash"
			obj.menu_title = () => "Панель управления"
			obj.menu_tools = () => [
				this.Spread_close()
			] as readonly any[]
			obj.spreads = () => ({
				form_enter: this.Form_enter(),
				form_exit: this.Form_exit()
			})
			
			return obj
		}
		
		/**
		 * ```tree
		 * Stats_body $scale_stats
		 * ```
		 */
		@ $mol_mem
		Stats_body() {
			const obj = new this.$.$scale_stats()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Stats_close
		 * ```
		 */
		Stats_close() {
			return this.Stats().Spread_close()
		}
		
		/**
		 * ```tree
		 * Stats $mol_book2_catalog
		 * 	menu_body / <= Stats_body
		 * 	param \stats
		 * 	menu_title \Статистика
		 * 	menu_tools / <= Spread_close
		 * 	Spread_close => Stats_close
		 * ```
		 */
		@ $mol_mem
		Stats() {
			const obj = new this.$.$mol_book2_catalog()
			
			obj.menu_body = () => [
				this.Stats_body()
			] as readonly any[]
			obj.param = () => "stats"
			obj.menu_title = () => "Статистика"
			obj.menu_tools = () => [
				this.Spread_close()
			] as readonly any[]
			
			return obj
		}
	}
	
}

