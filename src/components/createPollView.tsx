import React, { useState } from 'react';
import { IOptionInput as IOptionInput, pollData, option, sendPollData, IgetPoll, getPollOption } from '../state/State';
import OptionInput from './OptionInput';
import { initialOptions, } from '../state/State';
import  {sendPOST, createPollURL } from '../helprs/useFetch';
import GetPollView from './getPollView';
import ListPolls from './listPollsView';




function CreatePollView () {

    let initialData: IgetPoll = {
        id: 0,
        title: "",
        options: []
    }

    // Todo check from url queryparams for ids, make query db

    const[createdPoll,setCreatedPoll] = useState<IgetPoll>(initialData);
    const[optionInputArr, setOptionInputArr] = useState<IOptionInput[]>(initialOptions);
    const[poll, setPoll] = useState<pollData>({title:"",options:[{key:"Option1", value:""},{key:"Option2", value:""}]});

    const handleTitleChange = (param: React.FormEvent<HTMLInputElement>)=>{
        let inputElement = param.target as HTMLInputElement;
        setPoll({...poll, title: inputElement.value });
    }


    const handleOptionChange = (event: React.FormEvent<HTMLInputElement>)=> {

        let inputElement = event.target as HTMLInputElement;

        let newOptions = optionInputArr.map((value)=>{
            if(value.key === inputElement.name){
                return {
                    ...value,
                    key: inputElement.name,
                    value: inputElement.value
                }
            }else{
                return value;
            }
        })
        
        setOptionInputArr((prevstate)=>{
            return newOptions
        })

    }

    // add new element to the list, give it unique name
    const addElement = () =>{
        let newOption: IOptionInput = {
            className: 'inputElement',
            type: 'text',
            name: 'Option'+ (optionInputArr.length + 1),
            placeholder: 'Option '+ (optionInputArr.length + 1),
            key: "Option" + (optionInputArr.length + 1),
            value:""
        }
        
        setOptionInputArr([...optionInputArr ,newOption])
        
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // stop from refreshing page

        let sendPollData: sendPollData = {
            title : poll.title,
            options: optionInputArr.map((option)=>{
                return option.value;
            })
        }

        //let response =await sendPOST(createPollURL,JSON.stringify(sendPollData));
        // TODO RM mock return data
        let mockOptions: getPollOption[] = sendPollData.options.map((item,index)=>{
            return {id:index,votes: ( Math.floor(Math.random() * 10) ), title: item}
        })
        setCreatedPoll({title:sendPollData.title as string,id:1, options: mockOptions})

    }


        return (
            <>
            <div className='createPollViewContainer'>
                <div className="createPollViewItem">
                    <form onSubmit={handleSubmit} id="form1" className="createPollViewForm">
                    <input name="title" onChange={handleTitleChange} className="inputElement" type="text" placeholder='Title' />
                    {optionInputArr.map((item)=>{
                        return <OptionInput optionInput={item} key={item.key} onChangeHandler={handleOptionChange} />
                    })}
                        <button type="button" onClick={addElement} className='button-19'>
                            Add Option
                        </button> 
                        <input className="button-19 submit" type="submit" value="Create Poll"></input>
                    </form>
                </div>
                
            </div>
       
                <GetPollView pieChartData={createdPoll}/>
        

            <ListPolls/>
            
        </>     

    
      
        )
    
    }


export default CreatePollView;