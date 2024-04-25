import React from 'react';

import {Post, useReactToPost} from '@domain';

import {Box, TouchableOpacityBox, Icon, IconProps, Text} from '@components';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};
export function PostActions({post, hideCommentAction}: Props) {
  const likeReaction = useReactToPost({post, postReactionType: 'like'});
  const favoriteReaction = useReactToPost({post, postReactionType: 'favorite'});

  function likePost() {
    //TODO: Implement like post
  }

  function navigateToComments() {
    //TODO: Implement navigate to comments
  }

  function favoritePost() {
    // TODO: Implement favorite post
  }
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked={likeReaction.hasReacted}
        onPress={likePost}
        text={post.reactionCount}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
      />
      <Item
        disabled={hideCommentAction}
        marked={false}
        onPress={navigateToComments}
        text={post.commentCount}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
      />
      <Item
        marked={favoriteReaction.hasReacted}
        onPress={favoritePost}
        text={post.favoriteCount}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  disabled?: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}
function Item({onPress, icon, marked, text, disabled}: ItemProps) {
  return (
    <TouchableOpacityBox
      disabled={disabled}
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
