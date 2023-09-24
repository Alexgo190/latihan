import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react"

import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Formik, Form, ErrorMessage } from "formik"
import { fetchTweet, postTweet } from "../../feature/tweet/tweetSlice"
import * as yup from "yup"

const postSchema = yup.object().shape({
  tweet: yup.string().required().min(5).max(50),
})

export default function index() {
  const dispatch = useDispatch()
  const tweets = useSelector((state) => state.tweet.tweetList)

  useEffect(() => {
    dispatch(fetchTweet())
  }, [])

  return (
    <>
      <Container maxW={"container.lg"}>
        <Center>
          <Heading as="h3" margin={"20px 0"}>
            Tweet
          </Heading>
        </Center>
        <Formik
          initialValues={{
            tweet: "",
          }}
          onSubmit={(values) => {
            dispatch(
              postTweet({
                tweet: values.tweet,
                user_id: 1,
                name: "Alex",
              })
            )
            dispatch(fetchTweet())
          }}
          validationSchema={postSchema}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <FormControl>
                <FormLabel>Tweet : </FormLabel>
                <Textarea
                  name="tweet"
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Textarea>
                <ErrorMessage
                  name="tweet"
                  component={"div"}
                  style={{ color: "red" }}
                ></ErrorMessage>
                <div>{values.tweet.length}/50</div>
                <Button type="submit">Submit</Button>
              </FormControl>
            </Form>
          )}
        </Formik>
        <Flex justifyContent={"space-around"}>
          {tweets.map((item, index) => (
            <Card w="24%" key={index}>
              <CardHeader backgroundColor={"#1d5D9b"} color={"white"}>
                <Heading as="h4" fontSize={"18px"}>
                  {item.name}
                </Heading>
              </CardHeader>
              <CardBody>{item.tweet}</CardBody>
            </Card>
          ))}
        </Flex>
      </Container>
    </>
  )
}
