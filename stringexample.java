import java.util.*;
class stringexample
{
 
    public static int countstring(String text, String str)
    {
 
        int index = 0, count = 0;
        while (true)
        {
            index = text.indexOf(str, index);
            if (index != -1)
            {
                count ++;
                index = index + str.length();
            }
            else {
                break;
            }
        }
 
        return count;
 }
 
    public static void main(String[] args)
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("enter the string: ");
        String text = sc.nextLine();
 		System.out.println("substring: ");
 		String str = sc.next();
        int count = countstring(text, str);
        System.out.println(count);
    }
}