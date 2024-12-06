'use client'

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Form from "@components/Form"
const EditPrompt = () => {
const router = useRouter();
const searchParams = useSearchParams()
const promptId = searchParams.get('id')

    const [submitting, setsubmitting] = useState(false)
const [post, setpost] = useState({
    prompt: '',
    tag: '',
})

useEffect(() => {
    const getPromptDetails = async () => {
        const response = await fetch(`/api/prompt${promptId}`)
    }

    if(promptId) getPromptDetails()
}, [promptId])

const updatePrompt = async (e) => {
    e.preventDefault();
    setsubmitting(true)

    if(!promptId) return alert(`Prompt ID not found`)

    try {
        const response  = await fetch(`api/prompt/${promptId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                prompt: post.prompt,
                tag: post.tag
            })
        })

        if (response.ok) {
            router.push('/')
        }
    } catch (error) {
        console.log(error)
    }
    finally {
        setsubmitting(false)
    }

 }

  return (
   <Form 
   type="Edit"
   post={post}
   setpost={setpost}
   submitting={submitting}
   handleSubmit= {() => {}}
   />
  )
}

export default EditPrompt