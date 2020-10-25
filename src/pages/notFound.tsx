import React from 'react'
import { Button, Space, Result } from 'antd'
import { useHistory } from 'react-router-dom'

export default function NotFound() {
    const history = useHistory()
    return (
        <Result
            status="404"
            title="Page not found"
            subTitle="The page you looking for can't be found."
            extra={
                <Space>
                    <Button type="primary" onClick={() => history.push("/")}>
                        Go Home
				    </Button>
                    <Button type="primary" onClick={() => history.goBack()}>
                        Go Back
				    </Button>
                </Space>
            }
        />
    )
}
