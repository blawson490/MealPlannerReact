'use client'
import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { SheetTitle, SheetContent, SheetHeader, SheetDescription, SheetFooter, SheetClose } from "./ui/sheet";

export default function AddRecipeSheet() {
  const [title, setTitle] = useState("")
  const [timeToCook, setTimeToCook] = useState("")

  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const changeTimeToCook = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeToCook(event.target.value)
  }
    return (
        <>
            <SheetHeader>
              <SheetTitle>Add Recipe</SheetTitle>
              <SheetDescription>
                Create a new recipe. Click save once you are finished.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
                <Button> Add Image </Button>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input id="title" value={title} onChange={changeTitle} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="time" className="text-right">
                  Time To Cook
                </Label>
                <Input type="number" id="time" value={timeToCook} onChange={changeTimeToCook} className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
        </>
    )
}