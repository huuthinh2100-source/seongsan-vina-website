(function (root) {
  function composeDocumentRequest(fields) {
    const body = [
      ['Họ tên', fields.name], ['Công ty', fields.company],
      ['Điện thoại', fields.phone], ['Email', fields.email],
      ['Tài liệu cần nhận', fields.service], ['Ghi chú', fields.msg]
    ].map(([label, value]) => label + ': ' + (value || '')).join('\r\n');
    return 'mailto:seongsantm@gmail.com?subject=' +
      encodeURIComponent('[Website] Yêu cầu tài liệu - ' + (fields.name || '')) +
      '&body=' + encodeURIComponent(body);
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = composeDocumentRequest;
  else root.composeDocumentRequest = composeDocumentRequest;
})(typeof window === 'undefined' ? {} : window);
