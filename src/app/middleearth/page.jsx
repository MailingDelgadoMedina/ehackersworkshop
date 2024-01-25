import React from 'react'

function Middleearth() {
  return (
    <div>
  <div className="border-black border-solid border-2 m-3 p-14">


        <h4 className="font-bold text-1xl">Activity  Learning to Love Your Terminal</h4>
        <h1 className=' font-extrabold text-6xl text-blue-900 '>Middle Earth</h1>
        <p className=' text-lg font-medium  '> In this activity, we will use the terminal commands we&#39;ve learned in this lesson to build and manipulate a large system of files and folders.</p>

        <h2 className=' font-extrabold text-3xl text-blue-500 '>Prerequisites</h2>
        <p> You will need to know the following terminal commands to complete this activity:</p>
        <ul className='  list-disc'>
            <li>ls</li>
            <li>cd</li>
            <li>mkdir</li>
            <li>touch</li>
            <ul className='  list-disc'>
                <li >This is covered in the activity &#34; Your First Web Page.&#34;</li>
            </ul>
            <li>mv</li>
            <ul>
                <li>This is covered in the bonus for &#34; Your First Web Page. &#34;</li>
            </ul>
            <li>rm</li>
            <ul>
                <li>Consult Google to learn how to use this command now.</li>
            </ul>
        </ul>


        <h2  className=' font-extrabold text-3xl text-blue-500 '>Instructions</h2>
        <ol className='  list-decimal'>
            <li>Create a directory named middle_earth.</li>
            <li>Create a directory named the_shire inside middle_earth.</li>
            <li>Create a directory named frodo inside the_shire.</li>
            <li>Give Frodo the ring of power by creating a file named one.ring inside the_shire, then move it to the
                directory frodo.</li>
            <li>Create a directory named mordor inside middle_earth.</li>
            <li>Create a directory named mount_doom inside mordor.</li>
            <li>Move frodo from the_shire to mordor.</li>
            <li>Cast the ring into the fire by moving one.ring to mount_doom.</li>
            <li>Destroy one.ring using rm</li>
        </ol>



        <h2 className=' font-extrabold text-3xl text-blue-500 '>Tips</h2>
        <ul className='  list-disc'>
            <li>Keep middle_earth open in Finder or your File Explorer to visualize changes as you make them.</li>
            <li>Use .. to reference a parent directory.</li>
            <ul className='  list-disc'>
                <li>For example, if you were in the same directory as a file named sam, you could move sam to its parent directory by
                    typing: mv sam ..</li>
            </ul>
        </ul>


        <h2 className=' font-extrabold text-3xl text-blue-500 '>Acceptance Criteria</h2>
        <ul className='  list-disc'>
            <li>Your middle_earth directory should have two nested directories: the_shire and mordor.</li>
            <li>Your mordor directory should have two nested directories: mount_doom and frodo.</li>
            <li>The following directories should be empty: the_shire, mount_doom, and frodo.</li>
        </ul>







    </div>



    </div>
  )
}

export default Middleearth