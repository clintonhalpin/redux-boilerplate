import * as emojiActions from './emoji.actions';
import * as userActions from './user.actions';

const actions = {
  ...emojiActions,
  ...userActions
};

export default actions