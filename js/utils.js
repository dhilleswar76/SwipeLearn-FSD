export function getEl(id) {
  return document.getElementById(id);
}

export function formatBreadcrumb(branchName, domainName = '', topicName = '') {
  const parts = [branchName];
  if (domainName) parts.push('•');
  if (domainName) parts.push(domainName);
  if (topicName) parts.push('•');
  if (topicName) parts.push(topicName);

  return parts.map((part, idx) => {
    if (part === '•') return `<span class="bc-sep">${part}</span>`;
    if (idx === parts.length - 1) return `<b>${part}</b>`;
    return `<span>${part}</span>`;
  }).join('');
}


