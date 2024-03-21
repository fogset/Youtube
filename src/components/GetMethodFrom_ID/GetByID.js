import { useRecoilState } from "recoil";
import {
    Shorts_TotalRecoil,
    Comments_TotalRecoil,
    recoilChannelList,
} from "./../../state";
import React, { useEffect, useState } from "react";

export function GetCommentFromComment_ID(
    comment_ID,
    CommentsTotal,
    setCurrentComment
) {
    if (CommentsTotal !== null) {
        for (let i = 0; i < CommentsTotal.length; i++) {
            if (CommentsTotal[i].comment_ID === comment_ID) {
                setCurrentComment(CommentsTotal[i].comments_List);
            }
        }
    }
}

export function GetChannelFromChannel_ID(
    channel_ID,
    totalChannel,
    setCurrentChannel
) {
    if (totalChannel !== null) {
        for (let i = 0; i < totalChannel.length; i++) {
            if (totalChannel[i].channelId === channel_ID) {
                setCurrentChannel(totalChannel[i]);
            }
        }
    }
}

export function GetShortFromShort_ID(short_ID, totalShorts, setCurrentShort) {
    if (totalShorts !== null) {
        for (let i = 0; i < totalShorts.length; i++) {
            if (totalShorts[i].id === short_ID) {
                setCurrentShort(totalShorts[i]);
            }
        }
    }
}

export function GetVideoListFromChannel_ID(
    channel_ID,
    totalVideos,
    setCurrentChannelVideo
) {
    let filterChannel = [];
    if (totalVideos !== null) {
        for (let i = 0; i < totalVideos.length; i++) {
            if (totalVideos[i].channelId === channel_ID) {
                filterChannel.push(totalVideos[i]);
            }
        }
    }
    setCurrentChannelVideo(filterChannel);
}

export function GetShortsListFromChannel_ID(ID, totalShorts) {
    let filterShorts = [];
    if (totalShorts !== null) {
        for (let i = 0; i < totalShorts.length; i++) {
            if (totalShorts[i].channel_ID === ID) {
                filterShorts.push(totalShorts[i]);
            }
        }
    }
    return filterShorts;
}

export function GetPlayListByChannel_ID(channel_ID, channelsTotal) {
    if (channelsTotal !== null) {
        for (let i = 0; i < channelsTotal.length; i++) {
            if (channelsTotal[i].channelId === channel_ID) {
                return channelsTotal[i].playlist;
            }
        }
    }
}
export function GetPostListFrom_Channel_ID(
    channel_ID,
    total_Post,
    setPostList
) {
    let filterdPost = [];
    if (total_Post !== null) {
        for (let i = 0; i < total_Post.length; i++) {
            if (total_Post[i].channelId === channel_ID) {
                filterdPost.push(total_Post[i]);
            }
        }
    }
    setPostList(filterdPost);
}
export function GetPostFromPost_ID(post_ID, total_Post, setCurrentPost) {
    if (total_Post !== null) {
        for (let i = 0; i < total_Post.length; i++) {
            if (total_Post[i].post_ID === post_ID) {
                setCurrentPost(total_Post[i]);
            }
        }
    }
}
