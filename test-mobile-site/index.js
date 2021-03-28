var hoveringOnActiveArea = false;

function initializeDropdown () {
  var dropdownTarget = document.getElementById('nav-guiding-phiolosophy'),
    dropdown = document.getElementById('guiding-philosophy-dropdown');

  if (!dropdownTarget) {
    return;
  }

  typeof dropdownTarget.addEventListener === 'function' &&
    dropdownTarget.addEventListener('mouseenter', function () {
      sethoveringOnActiveArea(true);

      displayDropdown();
    });

  dropdownTarget.addEventListener('mouseleave', function () {
    sethoveringOnActiveArea(false);

    setTimeout(hideDropdown, 500)
  });

  dropdown.addEventListener('mouseenter', function () { 
    sethoveringOnActiveArea(true);
  });

  dropdown.addEventListener('mouseleave', function () {
    sethoveringOnActiveArea(false);

    setTimeout(hideDropdown, 500);
  });
}

function displayDropdown () {
  var dropdownTarget = document.getElementById('nav-guiding-phiolosophy'),
    dropdown = document.getElementById('guiding-philosophy-dropdown');

  if (!dropdownTarget || !dropdown) {
    return;
  }

  var boundingRect = typeof dropdownTarget.getBoundingClientRect === 'function' &&
    dropdownTarget.getBoundingClientRect();

  dropdown.style = 'display: block; top: ' +
    (boundingRect.bottom + 10) + 
    'px; left: ' + boundingRect.left + 'px; width: ' +
    boundingRect.width + 'px;';
}

function hideDropdown () {
  var dropdown = document.getElementById('guiding-philosophy-dropdown');

  if (!dropdown) {
    return;
  }

  // If the cursor is still hovering on dropdown do nothing.
  if (hoveringOnActiveArea) {
    return;
  }

  dropdown.style = 'display: none;';
}

function sethoveringOnActiveArea (value) {
  hoveringOnActiveArea = value;
}

// Initialize the dropdown when the content has loaded.
window.addEventListener('load', initializeDropdown);
