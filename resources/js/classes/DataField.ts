export default class DataField {
    _value: string;
    _editable: Boolean;
    _sortable: Boolean;
    _image: Boolean;
    _highlight: Boolean;
    _colscount: Number;
    _virtual: Number;

    constructor(_field: Object)
    {
      this._editable = (_field['isEditable'] != null)?_field['isEditable'].value:false;
      this._sortable = (_field['isSortable'] != null)?_field['isSortable'].value:false;
      this._image = (_field['isImage'] != null)?_field['isImage'].value:false;
      this._highlight = (_field['isHightLight'] != null)?_field['isHightLight'].value:false;
      this._colscount = (_field['isEditable'] != null)?_field['isEditable'].value:false;
      this._virtual = (_field['isEditable'] != null)?_field['isEditable'].value:false;
    }

    getField() {
        return this;
    }
}
