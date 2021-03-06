Package.describe({
  name: "wolves:neat",
  summary: "Meteor 0.9.3+ - A lightweight, semantic grid framework built on top of Bourbon.",
  version: "1.0.0",
  git: "https://github.com/wolvesio/meteor-neat"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use('fourseven:scss@1.0.0');
  api.addFiles([
    // Helpers
    "neat/_neat-helpers.scss",
    //Functions
    "neat/functions/_new-breakpoint.scss",
    "neat/functions/_private.scss",
    // Grid
    "neat/grid/_private.scss",
    "neat/grid/_reset.scss",
    "neat/grid/_grid.scss",
    "neat/grid/_omega.scss",
    "neat/grid/_outer-container.scss",
    "neat/grid/_span-columns.scss",
    "neat/grid/_row.scss",
    "neat/grid/_shift.scss",
    "neat/grid/_pad.scss",
    "neat/grid/_fill-parent.scss",
    "neat/grid/_media.scss",
    "neat/grid/_to-deprecate.scss",
    "neat/grid/_visual-grid.scss",
    //Settings
    "neat/settings/_grid.scss",
    "neat/settings/_visual-grid.scss",
    "neat/_neat.scss"
  ], 'server', {isAsset: true});
});
