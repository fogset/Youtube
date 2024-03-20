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
