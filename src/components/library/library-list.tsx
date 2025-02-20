"use client";
import { UserData } from "@/types/common.type";
import { EpisodeItem } from "@/types/episode.type ";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function LibraryList({ user }: { user: UserData }) {
  const episodeData: EpisodeItem[] = [
    {
      id: "1",
      thumb:
        "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      adult: false,
      genre: ["Drama", "Romance", "School life"],
      title:
        "글자 제한 없음 / Welcome! To the BL esearch Club Welcome! To the BL Research Club To the BL Research Club",
      copyRight: "Wang Yi",
      description:
        "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
      changeAdult: true,
      serviceN: true,
      serviceEnd: "26.01.01",
      price: 2,
      waitFreeTime: 12,
      expiration: false,
      episodeList: [
        {
          id: "1",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: true,
          notice: false,
          epilogue: false,
          special: false,
          new: false,
          rating: "9.1",
          date: "Apr 21, 2018",
          waitFree: false,
          coupon: false,
          free: true,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "2",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "1",
          prologue: false,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.3",
          date: "Apr 23, 2018",
          waitFree: false,
          coupon: false,
          free: true,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "3",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "2",
          prologue: false,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.5",
          date: "Apr 25, 2018",
          waitFree: false,
          coupon: false,
          free: true,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "4",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: false,
          notice: true,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.7",
          date: "Apr 27, 2018",
          waitFree: true,
          coupon: false,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "5",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: false,
          notice: false,
          epilogue: false,
          special: true,
          new: true,
          rating: "9.9",
          date: "Apr 28, 2018",
          waitFree: false,
          coupon: true,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "6",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "3",
          prologue: false,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.9",
          date: "Apr 21, 2018",
          waitFree: false,
          coupon: false,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "7",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: false,
          notice: false,
          epilogue: true,
          special: false,
          new: true,
          rating: "9.9",
          date: "Apr 21, 2018",
          waitFree: false,
          coupon: false,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
      ],
    },
    {
      id: "2",
      thumb:
        "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      adult: true,
      genre: ["Drama", "Romance", "School life"],
      title: "TEST NAME",
      copyRight: "Wang Yi",
      description:
        "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
      changeAdult: false,
      serviceN: true,
      serviceEnd: "",
      price: 3,
      waitFreeTime: 24,
      expiration: false,
      episodeList: [
        {
          id: "1",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: true,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.9",
          date: "Apr 21, 2018",
          waitFree: false,
          coupon: false,
          free: true,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "2",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "1",
          prologue: false,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.9",
          date: "Apr 21, 2018",
          waitFree: true,
          coupon: false,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "3",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: false,
          notice: true,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.9",
          date: "Apr 21, 2018",
          waitFree: false,
          coupon: true,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "4",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "2",
          prologue: false,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.9",
          date: "Apr 21, 2018",
          waitFree: false,
          coupon: false,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
      ],
    },
    {
      id: "3",
      thumb:
        "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      adult: true,
      genre: ["Drama", "Romance", "School life"],
      title: "TEST NAME",
      copyRight: "Wang Yi",
      description:
        "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
      changeAdult: false,
      serviceN: true,
      serviceEnd: "26.01.01",
      price: 3,
      waitFreeTime: 48,
      expiration: false,
      episodeList: [
        {
          id: "1",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: true,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.9",
          date: "Apr 21, 2018",
          waitFree: true,
          coupon: false,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
      ],
    },
    {
      id: "4",
      thumb:
        "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      adult: false,
      genre: ["Drama", "Romance", "School life"],
      title: "TEST NAME",
      copyRight: "Wang Yi",
      description:
        "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
      changeAdult: false,
      serviceN: false,
      serviceEnd: "",
      price: 2,
      waitFreeTime: 0,
      expiration: false,
      episodeList: [
        {
          id: "1",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: true,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.9",
          date: "Apr 21, 2018",
          waitFree: true,
          coupon: false,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
      ],
    },
    {
      id: "5",
      thumb:
        "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      adult: true,
      genre: ["Drama", "Romance", "School life"],
      title: "TEST NAME",
      copyRight: "Wang Yi",
      description:
        "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
      changeAdult: false,
      serviceN: true,
      serviceEnd: "26.01.01",
      price: 2,
      waitFreeTime: 72,
      expiration: false,
      episodeList: [
        {
          id: "1",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: true,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.9",
          date: "Apr 21, 2018",
          waitFree: true,
          coupon: false,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
      ],
    },
    {
      id: "6",
      thumb:
        "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      adult: false,
      genre: ["Drama", "Romance", "School life"],
      title: "TEST NAME",
      copyRight: "Wang Yi",
      description:
        "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
      changeAdult: false,
      serviceN: true,
      serviceEnd: "26.01.01",
      price: 2,
      waitFreeTime: 0,
      expiration: false,
      episodeList: [
        {
          id: "1",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: true,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.9",
          date: "Apr 21, 2018",
          waitFree: true,
          coupon: false,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
      ],
    },
    {
      id: "7",
      thumb:
        "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      adult: true,
      genre: ["Drama", "Romance", "School life"],
      title:
        "글자 제한 없음 / Welcome! To the BL esearch Club Welcome! To the BL Research Club To the BL Research Club",
      copyRight: "Wang Yi",
      description:
        "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
      changeAdult: false,
      serviceN: false,
      serviceEnd: "",
      price: 2,
      waitFreeTime: 12,
      expiration: true,
      episodeList: [
        {
          id: "1",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: true,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.1",
          date: "Apr 21, 2018",
          waitFree: false,
          coupon: false,
          free: true,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "2",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "1",
          prologue: false,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.3",
          date: "Apr 23, 2018",
          waitFree: false,
          coupon: false,
          free: true,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "3",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "2",
          prologue: false,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.5",
          date: "Apr 25, 2018",
          waitFree: false,
          coupon: false,
          free: true,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "4",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: false,
          notice: true,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.7",
          date: "Apr 27, 2018",
          waitFree: true,
          coupon: false,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "5",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: false,
          notice: false,
          epilogue: false,
          special: true,
          new: true,
          rating: "9.9",
          date: "Apr 28, 2018",
          waitFree: false,
          coupon: true,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "6",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "3",
          prologue: false,
          notice: false,
          epilogue: false,
          special: false,
          new: true,
          rating: "9.9",
          date: "Apr 21, 2018",
          waitFree: false,
          coupon: false,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
        {
          id: "7",
          thumb:
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          title: "TEST NAME",
          episodeNum: "0",
          prologue: false,
          notice: false,
          epilogue: true,
          special: false,
          new: true,
          rating: "9.9",
          date: "Apr 21, 2018",
          waitFree: false,
          coupon: false,
          free: false,
          view: [
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
            "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
          ],
        },
      ],
    },
  ];
	
  // const readWork = user?.read?.map((e: { work: string }) => e.work) || [];
  // const readList = episodeData.filter((item) => readWork.includes(item.id)); //데이터 순서가 아닌 숫자가 낮은 순서대로 정렬이됨
  const readList = user?.read?.map((e: { work: string }) => { //데이터 순서대로 정렬이 되게끔 반복문 사용
		return episodeData.find((item) => item.id === e.work);
	}).filter(Boolean) || [];

	readList.reverse();

	const today = new Date().toISOString().split("T")[0];

	const daysAgo = (lastRead: string) => {
		const lastDate = new Date(lastRead);
		const result = new Date(today).getTime() - lastDate.getTime();
		return Math.floor(result / (1000 * 3600 * 24));
	}

	const LastReadArr = user?.read?.map((e, i) => {
		const daysDifference = daysAgo(e.lastReadDate);
		if (daysDifference == 0) {
			return [e.work, e.lastReadDate, `오늘`]
		} else {
			return [e.work, e.lastReadDate, `${daysDifference}일전`]
		}
	})

	LastReadArr?.reverse();

	const [editMode, setEditMode] = useState(false);
	const [delBtn, setDelBtn] = useState(true);
	const [checkedArr, setCheckedArr] = useState<boolean[]>(Array(readList.length).fill(false));

  const [sortOpen, setSortOpen] = useState(false);
  const sortOnClick = () => {
    setSortOpen(!sortOpen);
  };

	const editOnClick = () => {
		setEditMode(true)
	}

	const editUnitOnClick = (i: number, isChecked: boolean) => {
		const checkedArr_ = [...checkedArr]
		checkedArr_[i] = isChecked;
		setCheckedArr(checkedArr_);
		const trueArr = checkedArr_.filter((item: boolean) => item == true);
		if (trueArr.length > 0) {
			setDelBtn(false);
		} else {
			setDelBtn(true);
		}
	}


  return (
    <section className="max-w-[768px] mx-auto">
      <article className="px-5">
        <div className="px-4 py-5 rounded-[20px] bg-gray-50">
          <div className="mb-[30px] flex justify-between items-center">
            <div className="rounded-[50px] bg-white relative">
              <input type="text" className="h-[36px] pl-4 pr-10 bg-transparent" />
              <button className="absolute top-[50%] right-3 -translate-y-[50%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.29331 15.2535C12.5849 15.2535 15.2533 12.5851 15.2533 9.2935C15.2533 6.00188 12.5849 3.3335 9.29331 3.3335C6.0017 3.3335 3.33331 6.00188 3.33331 9.2935C3.33331 12.5851 6.0017 15.2535 9.29331 15.2535Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M13.4933 13.4932L15.9333 15.9332" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
            <ul className="flex justify-end items-center gap-[30px]">
              <li className="flex justify-start items-center">
                <p className="text-[13px] font-normal text-[#666] leading-[24px]">총 3개</p>
                <span className="w-[1px] h-[10px] mx-[10px] bg-gray-300"></span>
                <div className="relative">
                  <button className="text-[13px] font-normal text-black leading-[24px]" onClick={sortOnClick}>최근 읽은 순</button>

                  <div className={`absolute left-[50%] top-[calc(100%+10px)] -translate-x-[50%] overflow-hidden ${sortOpen ? "h-[86px] duration-300" : "h-0"}`}>
                    <ul className="w-[120px] p-1 border border-gray-300 rounded-[10px] bg-white text-center">
                      <li>
                        <button className="w-full h-[38px] rounded-[5px] text-[12px] font-normal leading-[38px] bg-red-50">최근 읽은 순</button>
                      </li>
                      <li>
                        <button className="w-full h-[38px] rounded-[5px] text-[12px] font-normal leading-[38px]">업데이트 순</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <button className="text-[13px] font-medium text-black leading-[24px]" onClick={editOnClick}>편집</button>
              </li>
            </ul>
          </div>

          <div className="min-h-[600px] relative">
						{readList.length > 0 ? (
							<ul className={`grid grid-cols-2 items-start ${editMode ? "gap-y-3 gap-x-5" : "gap-3"}`}>
            	  {readList.map((e, i) => (
            	    <li className="flex justify-start items-center gap-2 relative" key={i}>
										{editMode ? (
											<>
												<div className="w-[30px] flex-shrink-0">
													<label htmlFor={i.toString()} className="w-full h-full absolute left-0 top-0 cursor-pointer z-[1]"></label>
													<input type="checkbox" id={i.toString()} className="sound-only peer" onChange={(e)=>{editUnitOnClick(i, e.target.checked)}}/>
													<div className="chk-box w-5 h-5 border border-[#ccc] rounded-[40px] flex justify-center items-center peer-checked:border-red-500 peer-checked:bg-red-500 group">
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            	      		      <path d="M6 10.3086L8.40346 12.712L13.7835 7.33203" stroke="#ccc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
            	      		    </svg>
													</div>
												</div>
											</>
										) : null}

            	      <div className={`chk-thumb w-[74px] h-[108px] rounded-[10px] flex-shrink-0 bg-black overflow-hidden ${editMode ? checkedArr[i] ? "outline outline-1 outline-red-500" : "opacity-50" : ""}`}>
            	        <Image src={e?.thumb || ""} alt={``} width={74} height={100} />
            	      </div>

            	      <div className="w-full flex justify-between items-center">
            	        <div className="pr-4">
            	          <ul className="flex justify-start items-center gap-1">
            	            <li className="px-1 text-[8px] font-bold leading-[14px]">New</li>
            	            <li className="px-1 text-[8px] font-bold leading-[14px]">Up</li>
            	            <li className="px-1 text-[8px] font-bold leading-[14px]">End</li>
            	          </ul>
            	          <h3 className="text-[13px] font-medium text-black line-clamp-1">
            	            {e?.title}
            	          </h3>
            	          <p className="text-[10px] font-normal text-[#999]">
            	            {LastReadArr ? (<>{`${LastReadArr[i][2]} 읽음`}</>) : null}
            	          </p>
            	          <p className="text-[10px] font-normal text-black">
            	            새 에피소드 <span className="text-red-500">10+</span>
            	          </p>
            	        </div>

											{editMode ? null : (
												<>
													<div className="w-[74px] flex-shrink-0">
            	        		  <Link href={``}>
            	        		    <p className="flex justify-between items-center text-[10px] font-medium leading-[15px]">
            	        		      {e?.episodeList[e.episodeList.length - 1].epilogue ? "Epilogue" : e?.episodeList[e.episodeList.length - 1].notice ? "Notice" : e?.episodeList[e.episodeList.length - 1].prologue ? "Prologue" : e?.episodeList[e.episodeList.length - 1].special ? "Special" : `${e?.episodeList[e.episodeList.length - 1].id}화`}
            	        		      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
            	        		        <path d="M1.00029 9.99384C0.802538 9.9938 0.609217 9.93515 0.444807 9.82526C0.280397 9.71538 0.152252 9.55923 0.0765819 9.37653C0.000911847 9.19383 -0.0188704 8.99279 0.0196971 8.79884C0.0582647 8.60488 0.153447 8.42672 0.293257 8.28687L3.58629 4.99384L0.293257 1.70087C0.111099 1.51227 0.0103386 1.25964 0.012617 0.997444C0.0148955 0.735247 0.120056 0.484427 0.305464 0.299019C0.490872 0.11361 0.741692 0.00845025 1.00389 0.00617183C1.26609 0.00389341 1.51866 0.104714 1.70726 0.286873L5.70726 4.28687C5.89473 4.4744 6.00004 4.72868 6.00004 4.99384C6.00004 5.25901 5.89473 5.51335 5.70726 5.70087L1.70726 9.70087C1.51977 9.88842 1.26548 9.99379 1.00029 9.99384Z" fill="#666666"></path>
            	        		      </svg>
            	        		    </p>
            	        		    <div className="h-1 mt-[10px] bg-[#e6e6e6] relative">
            	        		      <span className="w-1/2 h-1 inline-block bg-red-500 absolute left-0 top-0"></span>
            	        		    </div>
            	        		  </Link>
            	        		</div>
												</>
											)}
            	      </div>
            	    </li>
            	  ))}
            	</ul>
						) : (
							<div className="w-full absolute left-0 top-[50%] -translate-y-[50%]">
								<p className="text-center">목록이 없습니다</p>
							</div>
						)}
          </div>
        </div>
				{editMode ? (
					<div className="w-full flex justify-center items-center gap-5 fixed left-0 bottom-10">
						<button className="w-[160px] h-[50px] border border-black rounded-[50px] text-[16px] font-medium text-black" onClick={()=>{setEditMode(false)}}>취소</button>
						<button className={`w-[160px] h-[50px] rounded-[50px] bg-red-500 text-[16px] font-medium text-white ${delBtn ? "opacity-50" : ""}`} disabled={delBtn}>삭제</button>
					</div>
				) : null}
      </article>
    </section>
  );
}