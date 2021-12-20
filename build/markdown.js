import fs from 'fs';
import indentString from 'indent-string';
import '@jswork/next-replace-in-file';

nx.declare({
  statics: {
    init: function () {
      var instance = new this();
      instance.reset();
      instance.replace();
    }
  },
  methods: {
    reset: function () {
      fs.copyFileSync('./build/TEMPLATE.md', './README.md');
    },
    replace: function () {
      const docApp = fs.readFileSync('./public/src/app.tsx').toString();

      nx.replaceInFile('README.md', [
        ['__GENERATE_DAPP__', indentString(docApp, 2)],
        ['../../src/main', '@jswork/react-inline-edit']
      ]);
    }
  }
});
