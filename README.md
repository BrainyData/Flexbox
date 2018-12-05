# Flexbox

The library, in conjunction with the enclosed javascript file simulates flexbox behavior using a paged pane.

## Contents

### flexbox

This folder contains the JSON source files for the Omnis library in Github.

To restore these files in Omnis Studio, click 'Libraries' in the Studio Browser, then click 'New Lib from JSON'. In the import dialog, navigate to this source folder (containing library.json), then specify a different location for the new Library. Click on Import and open the library in the Studio Browser.

The paged pane control that is used to simulate a flexbox implements the custom event evSizeChanged and resizes the child controls according to the new width of the paged pane.

### ctl_flexbox.js

Before running the library and testing the remote form you must also copy the Javascript file ctl_flexbox.js to the Omnis html/script folder and update the jsctempl.htm file to include this script file below the includes for the standard Omnis script files.

The script plugs into the standard paged pane control, generating a custom "evSizeChanged" event when a responsive form causes the paged pane to resize. NOTE: this event is only generated when $name of the paged pane is set to "flexBox".
