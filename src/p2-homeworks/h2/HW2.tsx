import React, {useState} from 'react'
import Affairs from './Affairs'


export type AffairPriorityType = 'high'| 'low'| 'middle'
export type AffairType = {
    id: number,
    name: string,
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'anime', priority: 'low'},
    {id: 3, name: 'games', priority: 'low'},
    {id: 4, name: 'work', priority: 'high'},
    {id: 5, name: 'html & css', priority: 'middle'},
]


export const filterAffairs = (affairs:AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs
    else return affairs.filter(e =>e.priority === filter)
}
export const deleteAffair = (affairs: AffairType[], id: number): AffairType[] => {
    return affairs.filter(e =>e.id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id))

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
