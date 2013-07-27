/*
 * grunt-init-maple
 * https://github.com/t32k/grunt-init-maple/
 *
 * Copyright (c) 2013 Koji Ishimoto
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a basic maple project.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('project_name'),
    init.prompt('author_name')
  ], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy(props);
    var skips = [ '*.png', '*.jpg', '*.ttf', '*.woff'];  

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: skips});

    // All done!
    done();
  });

};