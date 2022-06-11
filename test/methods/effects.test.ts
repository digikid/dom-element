const elements = {
  visible: {
    selectors: ['.circle', '.list', '.styled'],
    display: ['inline-flex', 'inline-block', 'block'],
  },
  hidden: {
    selectors: ['.hidden', '.flex', '.block'],
    display: ['block', 'flex', 'block'],
  },
};

const effects = {
  appear: ['fadeIn', 'slideDown'],
  disappear: ['fadeOut', 'slideUp'],
  toggle: ['fadeToggle', 'slideToggle'],
};

const start = function (duration?: number, cb?: Function): void {
  $(this.selector)[this.name](duration, cb);
};

describe('effectsTest', () => {
  Object.entries(effects).forEach(([type, effects]) => {
    effects.forEach((name) => {
      const elementsType = type === 'appear' ? 'hidden' : 'visible';
      const elementsIdleType = type === 'appear' ? 'visible' : 'hidden';

      elements[elementsType].selectors.forEach((selector, i) => {
        const expected = elementsType === 'hidden'
          ? elements[elementsType].display[i]
          : 'none';

        if (type !== 'toggle') {
          test(`${name} default behavior`, async () => {
            const result = await checkEffect(name, selector, start);

            expect.assertions(1);

            expect(result).toEqual(expected);
          });

          test(`${name} with custom duration`, async () => {
            const result = await checkEffect(name, selector, start, 0);

            expect.assertions(1);

            expect(result).toEqual(expected);
          });

          test(`${name} with callback`, async () => {
            let check = false;

            await checkEffect(name, selector, start, 0, () => {
              check = true;
            });

            expect.assertions(1);

            expect(check).toBeTruthy();
          });
        } else {
          test(`default ${name} behavior`, async () => {
            const result1 = await checkEffect(name, selector, start, 0);
            const result2 = await checkEffect(name, selector, start, 50);
            const result3 = await checkEffect(name, selector, start, 100);

            expect.assertions(1);

            const check = result1 === expected
              && result1 !== result2
              && result1 === result3;

            expect(check).toBeTruthy();
          });
        }
      });

      elements[elementsIdleType].selectors.forEach((selector, i) => {
        const expected = elementsIdleType === 'hidden'
          ? 'none'
          : elements[elementsIdleType].display[i];

        if (type !== 'toggle') {
          test(`${name} idle call`, async () => {
            const result = await checkEffect(name, selector, start, 0);

            expect.assertions(1);

            expect(result).toEqual(expected);
          });
        }
      });
    });
  });
});
