String.prototype.isNOtNullOrEmpty = function (): boolean {
    return !(String(this) == null || String(this) == '')
}
export { }; 