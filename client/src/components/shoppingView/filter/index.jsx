import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { filterOptions } from '@/config'

import React, { Fragment } from 'react'

export default function ProductFilter({handleFilter,filters}) {
    return (
        <div className="bg-background rounded-lg shadow-sm">
            <div className="p-4 border-b">
                <h2 className="text-lg font-extrabold">Filters</h2>
                <div className="p-4 space-y-4">
                    {Object.keys(filterOptions)?.map((keyItem) =>
                        <Fragment>
                            <div>
                                <h3 className="text-base font-bold">{keyItem}</h3>
                                <div className="grid gap-2 mt-2">
                                    {filterOptions[keyItem]?.map((e) =>
                                        <Label className="flex font-medium items-center gap-2 ">
                                            <Checkbox onCheckedChange={()=>handleFilter(keyItem,e.id)} />
                                            {e.label}
                                        </Label>
                                    )}
                                </div>
                            </div>
                            <Separator/>
                        </Fragment>
                    )}

                </div>
            </div>
        </div>
    )
}
