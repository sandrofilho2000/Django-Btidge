const drag_item = `<svg stroke="currentColor" class="drag_icon text-2xl dark:text-white text-[#374151]" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>`;

document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelectorAll('.inline-related table tbody tr:not(.form-row)')
    .forEach((item, index) => {
      item.remove();
    });

  document
    .querySelectorAll('.inline-related table tbody tr.form-row')
    .forEach((item, index) => {
      item.querySelector('td').innerHTML = `
      <div class="flex items-center gap-1">
      ${drag_item} ${item.querySelector('td').innerHTML}
      </div>`;
    });
});
