import { UserData } from "@/types/common.type";

export const UserList: UserData[] = [
  {
    "id": "test",
    "pw": "testpw",
    "adult": true,
    "favorite": [
      "1",
      "4",
      "8"
    ],
    "coupon": [
      "10",
      "12/05"
    ],
    "read": [
      {
        "work": "1",
        "episode": [
          "1",
          "3",
          "4"
        ]
      },
      {
        "work": "2",
        "episode": [
          "2"
        ]
      },
      {
        "work": "4",
        "episode": [
          "1"
        ]
      }
    ],
    "collection": [
      {
        "work": "1",
        "episode": [
          "1"
        ]
      },
      {
        "work": "7",
        "episode": [
          "1",
          "3",
          "4"
        ]
      }
    ]
  },
  {
    "id": "test2",
    "pw": "testpw2",
    "adult": true,
    "favorite": [
      "2",
      "3",
      "6"
    ],
    "coupon": [
      "10",
      "12/05"
    ],
    "read": [
      {
        "work": "2",
        "episode": [
          "2"
        ]
      },
      {
        "work": "7",
        "episode": [
          "1",
          "2"
        ]
      }
    ],
    "collection": [
      {
        "work": "2",
        "episode": [
          "1",
          "2",
          "3"
        ]
      },
      {
        "work": "7",
        "episode": [
          "1",
          "3",
          "4",
          "5"
        ]
      }
    ]
  },
  {
    "id": "test3",
    "pw": "testpw3",
    "adult": true,
    "coupon": [
      "90",
      "31/12"
    ]
  },
  {
    "id": "dsfsjfklsd@jsdklfs.com",
    "pw": "sdjkflsdfs",
    "adult": false
  },
  {
    "id": "aaa@jksldfsd.com",
    "pw": "asdasdasd",
    "adult": false
  },
  {
    "id": "test4@test.com",
    "pw": "testpw4",
    "adult": false
  }
];
