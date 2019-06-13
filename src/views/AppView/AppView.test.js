import AppView from './AppView';

describe('AppView.prototype.render', () => {
  it('Should be an instance of Fucntion', () => {
    expect(AppView.prototype.render).toBeInstanceOf(Function);
  });

  it('Should be render correctly', () => {
    const context = {
      titles: [
        '123',
        '1234',
        '12345',
      ],
    };

    AppView.prototype.render.call(context);

    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
