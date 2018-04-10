require 'test_helper'
import reducers from '../../reducers';

class UserTest < ActiveSupport::TestCase
  test('reducers', () => {
    let state;
    state = reducers({}, {type:'@@router/LOCATION_CHANGE',payload:{pathname:'/users',search:'',hash:''}});
    expect(state).toEqual({});
  });

end
