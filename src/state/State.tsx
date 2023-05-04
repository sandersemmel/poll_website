  export interface sendPollData {
    title: String,
    options: string[]
  }

  export interface pollData {
    title: String,
    options: option[],
  }
 export interface option {
    key: string
    value: string
  }
  export interface IgetPoll {
    id: number,
    title: string,
    options: getPollOption[]
  }
  export interface getPollOption{
    id: number,
    title: string,
    votes: number
  }

export interface IOptionInput {
  className: string,
  type: string,
  name: string,
  placeholder: string,
  key: string,
  value:string
}

export interface allPolls {
  polls: poll[]
}
export interface poll {
  title: string,
  id: number
}

export const initialOptions: IOptionInput[] = [
  {name: "Option1",
  className: "inputElement",
  type: "text",
  placeholder: "Option 1",
  key: "Option1",
  value: ""
  },

  {name: "Option2",
  className: "inputElement",
  type: "text",
  placeholder: "Option 2",
  key: "Option2",
  value:""
  },
]
