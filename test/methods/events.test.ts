const tests = {
  blur: 'textarea',
  change: 'input',
  click: 'a',
  focus: 'input',
  resize: window,
  scroll: window,
  submit: 'form',
  'click change focus': '.checkbox',
};

describe('event', () => {
  Object.entries(tests).forEach(([event, element]) => {
    test(`${event} triggering`, () => {
      expect(
        checkEvent(element, event, function () {
          this.check = true;

          event.split(' ').forEach((event) => {
            let check = false;

            this.el.addEventListener(event, () => {
              check = true;
            });

            $(this.el)[event]();

            this.check = this.check && check;
          });
        }),
      ).toBeTruthy();
    });

    test(`${event} triggering with trigger method`, () => {
      expect(
        checkEvent(element, event, function () {
          this.check = true;

          event.split(' ').forEach((event) => {
            let check = false;

            this.el.addEventListener(event, () => {
              check = true;
            });

            $(this.el).trigger(event);

            this.check = this.check && check;
          });
        }),
      ).toBeTruthy();
    });

    test(`${event} binding`, () => {
      expect(
        checkEvent(element, event, function () {
          if (event.includes(' ')) {
            this.check = true;

            return;
          }

          $(this.el)[event](() => {
            this.check = true;
          });

          triggerEvent(this.el, event);
        }),
      ).toBeTruthy();
    });

    test(`${event} binding with on method`, () => {
      expect(
        checkEvent(element, event, function () {
          $(this.el).on(event, () => {
            this.check = true;
          });

          triggerEvent(this.el, event);
        }),
      ).toBeTruthy();
    });

    test(`remove ${event} binding`, () => {
      expect(
        checkEvent(element, event, function () {
          $(this.el)
            .on(event, () => {
              this.check = true;
            })
            .off(event);

          triggerEvent(this.el, event);
        }),
      ).toBeFalsy();
    });
  });
});
