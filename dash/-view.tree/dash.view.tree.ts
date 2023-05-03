namespace $ {
	export class $scale_dash extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Top_row
		 * 	<= Bottom_row
		 * ```
		 */
		sub() {
			return [
				this.Top_row(),
				this.Bottom_row()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * open_enter_form?val null
		 * ```
		 */
		@ $mol_mem
		open_enter_form(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Enter_button $mol_button_major
		 * 	title \Создать запись на въезд
		 * 	click?val <=> open_enter_form?val
		 * ```
		 */
		@ $mol_mem
		Enter_button() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => "Создать запись на въезд"
			obj.click = (val?: any) => this.open_enter_form(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * open_close_form?val null
		 * ```
		 */
		@ $mol_mem
		open_close_form(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Exit_button $mol_button_major
		 * 	title \Создать запись на выезд
		 * 	click?val <=> open_close_form?val
		 * ```
		 */
		@ $mol_mem
		Exit_button() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => "Создать запись на выезд"
			obj.click = (val?: any) => this.open_close_form(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Control_form $mol_form
		 * 	form_fields /
		 * 	buttons /
		 * 		<= Enter_button
		 * 		<= Exit_button
		 * ```
		 */
		@ $mol_mem
		Control_form() {
			const obj = new this.$.$mol_form()
			
			obj.form_fields = () => [
			] as readonly any[]
			obj.buttons = () => [
				this.Enter_button(),
				this.Exit_button()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Control $mol_section
		 * 	title \Управление
		 * 	content / <= Control_form
		 * ```
		 */
		@ $mol_mem
		Control() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => "Управление"
			obj.content = () => [
				this.Control_form()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Camera_1 $mol_image uri \camera1
		 * ```
		 */
		@ $mol_mem
		Camera_1() {
			const obj = new this.$.$mol_image()
			
			obj.uri = () => "camera1"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Camera_2 $mol_image uri \camera2
		 * ```
		 */
		@ $mol_mem
		Camera_2() {
			const obj = new this.$.$mol_image()
			
			obj.uri = () => "camera2"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Camera_row $mol_row sub /
		 * 	<= Camera_1
		 * 	<= Camera_2
		 * ```
		 */
		@ $mol_mem
		Camera_row() {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.Camera_1(),
				this.Camera_2()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Camera_list $mol_section
		 * 	title \Камеры
		 * 	content / <= Camera_row
		 * ```
		 */
		@ $mol_mem
		Camera_list() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => "Камеры"
			obj.content = () => [
				this.Camera_row()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Top_row $mol_row sub /
		 * 	<= Control
		 * 	<= Camera_list
		 * ```
		 */
		@ $mol_mem
		Top_row() {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.Control(),
				this.Camera_list()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Number_content* $mol_paragraph title \dwd
		 * ```
		 */
		@ $mol_mem_key
		Number_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => "dwd"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Number_labeler* $mol_labeler
		 * 	title \Гос. номер
		 * 	Content <= Number_content*
		 * ```
		 */
		@ $mol_mem_key
		Number_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Гос. номер"
			obj.Content = () => this.Number_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Transporter_content* $mol_paragraph title \00dwd
		 * ```
		 */
		@ $mol_mem_key
		Transporter_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => "00dwd"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Transporter_labeler* $mol_labeler
		 * 	title \Перевозчик
		 * 	Content <= Transporter_content*
		 * ```
		 */
		@ $mol_mem_key
		Transporter_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Перевозчик"
			obj.Content = () => this.Transporter_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Weight_gross_content* $mol_paragraph title \00dwd
		 * ```
		 */
		@ $mol_mem_key
		Weight_gross_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => "00dwd"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Weight_gross_labeler* $mol_labeler
		 * 	title \Брутто (кг)
		 * 	Content <= Weight_gross_content*
		 * ```
		 */
		@ $mol_mem_key
		Weight_gross_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Брутто (кг)"
			obj.Content = () => this.Weight_gross_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Type_weight_content* $mol_paragraph title \00dwd
		 * ```
		 */
		@ $mol_mem_key
		Type_weight_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => "00dwd"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Type_weight_labeler* $mol_labeler
		 * 	title \Вид груза
		 * 	Content <= Type_weight_content*
		 * ```
		 */
		@ $mol_mem_key
		Type_weight_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Вид груза"
			obj.Content = () => this.Type_weight_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Category_weight_content* $mol_paragraph title \00dwd
		 * ```
		 */
		@ $mol_mem_key
		Category_weight_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => "00dwd"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Category_weight_labeler* $mol_labeler
		 * 	title \Категория груза
		 * 	Content <= Category_weight_content*
		 * ```
		 */
		@ $mol_mem_key
		Category_weight_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Категория груза"
			obj.Content = () => this.Category_weight_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Date_enter_content* $mol_paragraph title \00dwd
		 * ```
		 */
		@ $mol_mem_key
		Date_enter_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => "00dwd"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Date_enter_labeler* $mol_labeler
		 * 	title \Дата и время въезда
		 * 	Content <= Date_enter_content*
		 * ```
		 */
		@ $mol_mem_key
		Date_enter_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Дата и время въезда"
			obj.Content = () => this.Date_enter_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * row_content* /
		 * 	<= Number_labeler*
		 * 	<= Transporter_labeler*
		 * 	<= Weight_gross_labeler*
		 * 	<= Type_weight_labeler*
		 * 	<= Category_weight_labeler*
		 * 	<= Date_enter_labeler*
		 * ```
		 */
		row_content(id: any) {
			return [
				this.Number_labeler(id),
				this.Transporter_labeler(id),
				this.Weight_gross_labeler(id),
				this.Type_weight_labeler(id),
				this.Category_weight_labeler(id),
				this.Date_enter_labeler(id)
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Table_row*0 $mol_row
		 * 	minimal_height 100
		 * 	minimal_width 200
		 * 	sub <= row_content*
		 * ```
		 */
		@ $mol_mem_key
		Table_row(id: any) {
			const obj = new this.$.$mol_row()
			
			obj.minimal_height = () => 100
			obj.minimal_width = () => 200
			obj.sub = () => this.row_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * rows / <= Table_row*0
		 * ```
		 */
		rows() {
			return [
				this.Table_row("0")
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Table $mol_list rows <= rows
		 * ```
		 */
		@ $mol_mem
		Table() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.rows()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Auto_list $mol_section
		 * 	title \На территории
		 * 	content / <= Table
		 * ```
		 */
		@ $mol_mem
		Auto_list() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => "На территории"
			obj.content = () => [
				this.Table()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Bottom_row $mol_row sub / <= Auto_list
		 * ```
		 */
		@ $mol_mem
		Bottom_row() {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.Auto_list()
			] as readonly any[]
			
			return obj
		}
	}
	
}

