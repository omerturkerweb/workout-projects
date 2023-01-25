				let container = document.querySelector(".container");
				let orderInsideBars = document.querySelectorAll(".order-bar-inside");
				let buttons = document.querySelectorAll(".order-button");
				let logo = document.querySelector(".logo-top");
				let orderStatus = document.querySelector(".footer-title-h3");
				let timer = document.querySelector(".timer");
				let leftMinute = document.querySelector(".minute-left");
				let body = document.querySelector("body");
				let bodyStyle = getComputedStyle(body);
				var timerMinute = new Date();
				let containerStyle = getComputedStyle(container);

				
				timerMinute.setMinutes(45);

				body.onload = function onLoad() {
						console.log(parseInt(bodyStyle.width));
						if(parseInt(bodyStyle.width)>768) {
							logo.style.transform = 'translateX(300px)';
							logo.style.transition = '.4s';
						}
					
				
						
						timer.innerHTML = timerMinute.getMinutes();
						orderInsideBars[0].style.display="block";
					
				
					
					orderStatus.innerHTML = "Sipariş Verildi!";
					buttons[0].style.backgroundColor = "var(--color-disabled)";
					buttons[0].style.boxShadow = "0px 0px 4px var(--color-disabled)";
						
				}
				
				for(let i =0; i<buttons.length; i++) {
					buttons[i].onmouseup = function () {

							switch (i) {

								case 1:
								if (confirm("Sipariş durumu \"Sipariş Hazırlanıyor\" olarak değiştirilsin mi?"))
								 {
										 	while(i>0) {
											buttons[i].style.backgroundColor = "var(--color-disabled)";
											buttons[i].style.boxShadow = "0px 0px 4px var(--color-disabled)";
											buttons[i].style.cursor = 'solved';
											orderInsideBars[i-1].style.backgroundColor = "var(--color-order-bar)";
											orderInsideBars[i-1].style.left = '0';
											orderInsideBars[i-1].style.animation = 'none';
											orderInsideBars[i].style.display="block";
											i--;	
								 			}
								 			timer.style.color = "#006266";
								 			orderStatus.innerHTML = "Sipariş Hazırlanıyor!";
								 			timerMinute.setMinutes(30);
								 			timer.innerHTML=timerMinute.getMinutes();
								 			
								}
								break;
								
								case 2:
								if (confirm("Sipariş durumu \"Sipariş Yolda\" olarak değiştirilsin mi?"))
								 {
										 	while(i>0) {
											buttons[i].style.backgroundColor = "var(--color-disabled)";
											buttons[i].style.boxShadow = "0px 0px 4px var(--color-disabled)";
											buttons[i].style.cursor = 'solved';
											buttons[i].disabled = true;
											orderInsideBars[i-1].style.backgroundColor = "var(--color-order-bar)";
											orderInsideBars[i-1].style.left = '0';
											orderInsideBars[i-1].style.animation = 'none';
											orderInsideBars[i].style.display="block";
											i--;	
								 			}
								 			timer.style.color = "#006266";
								 			orderStatus.innerHTML = "Sipariş Yolda!";
								 			timerMinute.setMinutes(10);
								 			timer.innerHTML=timerMinute.getMinutes();
								}
								break;
								case 3:

								if (confirm("Sipariş durumu \"Sipariş Teslim Edildi\" olarak değiştirilsin mi?"))
								 {	
								 			buttons[i+1].disabled=true;
								 			buttons[i+1].style.backgroundColor = "var(--color-disabled)";
											buttons[i+1].style.boxShadow = "0px 0px 4px var(--color-disabled)";
											buttons[i+1].style.cursor = 'solved';
								 			orderInsideBars[i].style.backgroundColor = "var(--color-order-bar)";
									 			orderInsideBars[i].style.left = '0';
												orderInsideBars[i].style.animation = 'none';

										 	while(i>0) {
											buttons[i].style.backgroundColor = "var(--color-disabled)";
											buttons[i].style.boxShadow = "0px 0px 4px var(--color-disabled)";
											buttons[i].style.cursor = 'solved';
											buttons[i].disabled = true;
											orderInsideBars[i-1].style.backgroundColor = "var(--color-order-bar)";
											orderInsideBars[i-1].style.left = '0';
											orderInsideBars[i-1].style.animation = 'none';
											orderInsideBars[i].style.display="block";
											i--;	
								 			}
								 			timer.style.color = "#006266";
								 			leftMinute.innerHTML = "Teslim Edildi!";
									 		timerMinute.setMinutes(0);
								 			timer.innerHTML=timerMinute.getMinutes();
								 			timer.style.color ='var(--color-positive)';
								 			leftMinute.style.color = 'var(--color-positive)';
								 			orderStatus.innerHTML = "Sipariş Teslim Edildi!";

								}

								break;
								case 4:
								if (confirm("Sipariş durumu \"Sipariş İptal edildi\" olarak değiştirilsin mi?"))
								 {	

										 	while(i>0) {
											buttons[i].style.backgroundColor = "var(--color-disabled)";
											buttons[i].style.boxShadow = "0px 0px 4px var(--color-disabled)";
											buttons[i].style.cursor = 'not-allowed';
											buttons[i].disabled = true;
											i--;	
								 			}
								 			orderStatus.innerHTML = "Sipariş İptal Edildi!";
								 			orderStatus.style.color = 'var(--color-negative)';
								 			document.querySelector(".canceled-info ").style.display="block";	
								 			timer.style.color ='var(--color-negative)';
								 			leftMinute.style.color = 'var(--color-negative)';
								 			leftMinute.innerHTML = "İptal Edildi!";
								 			timerMinute.setMinutes(0);
								 			timer.innerHTML=timerMinute.getMinutes();

								}
								break;
								

						}
					}
				}	

		