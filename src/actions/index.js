import * as emojiActions from './emoji.actions';
import * as userActions from './user.actions';
import * as markdownActions from './markdown.actions';

const actions = {
  ...emojiActions,
  ...userActions,
  ...markdownActions
};

export default actions