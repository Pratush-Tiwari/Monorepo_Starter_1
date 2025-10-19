import { useEffect, useState } from 'react'
import './App.css'
import {
  Button,
  Card,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Input,
  Separator,
  Textarea,
  Badge,
  Checkbox,
  Label,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Toaster,
  toast,
} from '@template/ui'

type Health = { status: string; nodeEnv: string }

function App() {
  const [count, setCount] = useState(0)
  const [health, setHealth] = useState<Health | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data: Health) => setHealth(data))
      .catch((err) => console.error('Health check failed', err))
  }, [])

  return (
    <>
      <Toaster richColors />
      <h1>Monorepo: Vite + React + shadcn/ui</h1>
      <div className="card">
        <Button onClick={() => setCount((c) => c + 1)}>count is {count}</Button>
        <Button variant="secondary" onClick={() => toast.success('Saved!')}>Show toast</Button>
      </div>
      <Separator />
      <div className="grid" style={{ display: 'grid', gap: 16 }}>
        <Card>
          <div className="p-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" className="mt-2" />
            <Label htmlFor="bio" className="mt-4">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about you" className="mt-2" />
            <div className="mt-4 flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms</Label>
              <Badge className="ml-auto">New</Badge>
            </div>
          </div>
        </Card>
        <Tabs defaultValue="account" className="w-[300px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4">Account content</TabsContent>
          <TabsContent value="password" className="p-4">Password content</TabsContent>
        </Tabs>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Open menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="card">
        <p>Backend health: {health ? `${health.status} (${health.nodeEnv})` : 'loading...'}</p>
      </div>
      <p className="read-the-docs">Shared UI from @template/ui</p>
    </>
  )
}

export default App
