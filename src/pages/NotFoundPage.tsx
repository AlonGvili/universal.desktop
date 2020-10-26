import React, { lazy } from 'react'
import { Button, Space, Result } from 'antd'
import { useHistory } from 'react-router-dom'
const NotFoundImage = lazy(
    () =>
      import(/* webpackChunkName: 'NotFoundImage' */ "pages/notfound-image.js")
  );
export default function NotFoundPage() {
    const history = useHistory()
    return (
        <Result
           
            title="Page not found"
            subTitle="The page you looking for can't be found."
            icon={<NotFoundImage />}
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
