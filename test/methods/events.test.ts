describe('event', () => {
  const tests = {
    blur: 'textarea',
    change: 'input',
    click: 'a',
    focus: 'input',
    resize: window,
    scroll: window,
    submit: 'form',
  };

  Object.entries(tests).forEach(([event, element]) => {
    test(`${event} triggering`, () => {
      expect(
        checkEvent(element, event, function () {
          this.el.addEventListener(event, () => {
            this.check = true;
          });

          $(this.el)[event]();
        }),
      ).toBeTruthy();
    });

    test(`${event} triggering with trigger method`, () => {
      expect(
        checkEvent(element, event, function () {
          this.el.addEventListener(event, () => {
            this.check = true;
          });

          $(this.el).trigger(event);
        }),
      ).toBeTruthy();
    });

    test(`${event} binding`, () => {
      expect(
        checkEvent(element, event, function () {
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
