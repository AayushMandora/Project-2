let B1=document.getElementById('b1');
        let B2=document.getElementById('b2');
        let B3=document.getElementById('b3');
        let B4=document.getElementById('b4');
        let B5=document.getElementById('b5');
        let B6=document.getElementById('b6');
        let B7=document.getElementById('b7');
        let B8=document.getElementById('b8');
        let B9=document.getElementById('b9');

        let xwins=0;
        let owins=0;
        let flag=0;
            
        // Li click event handler code
        function Click(element)
        {
            let temp=document.getElementById('text').innerHTML;
            if(temp=='❌')
            {
                    document.getElementById(element).textContent='❌';
                    document.getElementById('text').innerHTML='⭕';
                    check();
            }
            else
            {
                    document.getElementById(element).textContent='⭕';
                    document.getElementById('text').innerHTML='❌';
                    check();
            }
        }

        // Function for check who is WIN
        function check()
        {   
            if(B1.textContent=='⭕' && B2.textContent=='⭕' && B3.textContent=='⭕' ||
                B1.textContent=='⭕' && B4.textContent=='⭕' && B7.textContent=='⭕' ||
                B7.textContent=='⭕' && B8.textContent=='⭕' && B9.textContent=='⭕' ||
                B3.textContent=='⭕' && B6.textContent=='⭕' && B9.textContent=='⭕' ||
                B2.textContent=='⭕' && B5.textContent=='⭕' && B8.textContent=='⭕' ||
                B4.textContent=='⭕' && B5.textContent=='⭕' && B6.textContent=='⭕' ||
                B1.textContent=='⭕' && B5.textContent=='⭕' && B9.textContent=='⭕' ||
                B3.textContent=='⭕' && B5.textContent=='⭕' && B7.textContent=='⭕')
                {
                    document.getElementById('owin').innerHTML='<img src="happy.gif"/>';
                    document.getElementById('xwin').innerHTML='<img src="sad.gif"/>';
                    document.getElementById('bt').style.display='block';
                    document.getElementById('text').innerHTML='⭕ is win';
                    owins++;
                    document.getElementById('wino').innerHTML='⭕ = '+owins;
                    flag=1;
                }
            if(B1.textContent=='❌' && B2.textContent=='❌' && B3.textContent=='❌' ||
                B1.textContent=='❌' && B2.textContent=='❌' && B3.textContent=='❌' ||
                B1.textContent=='❌' && B4.textContent=='❌' && B7.textContent=='❌' ||
                B7.textContent=='❌' && B8.textContent=='❌' && B9.textContent=='❌' ||
                B3.textContent=='❌' && B6.textContent=='❌' && B9.textContent=='❌' ||
                B2.textContent=='❌' && B5.textContent=='❌' && B8.textContent=='❌' ||
                B4.textContent=='❌' && B5.textContent=='❌' && B6.textContent=='❌' ||
                B1.textContent=='❌' && B5.textContent=='❌' && B9.textContent=='❌' ||
                B3.textContent=='❌' && B5.textContent=='❌' && B7.textContent=='❌')
                {
                    document.getElementById('xwin').innerHTML='<img src="happy.gif"/>';
                    document.getElementById('owin').innerHTML='<img src="sad.gif"/>';
                    document.getElementById('bt').style.display='block';
                    document.getElementById('text').innerHTML='❌ is win';
                    xwins++;
                    document.getElementById('winx').innerHTML='❌ = '+xwins;
                    flag=1;
                }
                if(B1.textContent != '' && B2.textContent != '' && B3.textContent != '' &&
                    B4.textContent != '' && B5.textContent != '' && B6.textContent != '' &&
                    B7.textContent != '' && B8.textContent != '' && B9.textContent != '' && flag==0)
                {
                    document.getElementById('text').innerHTML='Game is Tie';
                    document.getElementById('xwin').innerHTML='<img src="sad.gif"/>';
                    document.getElementById('owin').innerHTML='<img src="sad.gif"/>';
                    document.getElementById('bt').style.display='block';
                }
        }

        // Restart button logic 
        function restart()
        {
            B1.textContent='';  B2.textContent=''; B3.textContent='';
            B4.textContent='';  B5.textContent=''; B6.textContent='';
            B7.textContent='';  B8.textContent=''; B9.textContent='';

            document.getElementById('xwin').innerHTML='';
            document.getElementById('owin').innerHTML='';

            document.getElementById('bt').style.display='none';

            if(document.getElementById('text').innerHTML=='❌ is win')
            {
                document.getElementById('text').innerHTML='❌';
            }
            else
            {
                document.getElementById('text').innerHTML='⭕';
            }
        }